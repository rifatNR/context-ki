import { privateProcedure, publicProcedure, router } from "@/trpc.mjs";
import { z } from "zod";
import { t } from "@/trpc.mjs";
import { Pool } from "pg";
import { delay } from "@/utils/helper.js";
import { TRPCError } from "@trpc/server";
import { mapErrorToTRPCError } from "@/utils/trpcError.js";

const ideaItemSchema = z.object({
    id: z.string(),
    user_id: z.number(),
    title: z.string(),
    description: z.string().nullable(),
});
const participantItemSchema = z.object({
    id: z.number(),
    idea_id: z.string(),
    user_id: z.number().nullable(),
    email: z.string().email(),
    state: z.string(),
});
export const ideaRouter = router({
    list: publicProcedure
        .output(
            z.object({
                message: z.string(),
                data: ideaItemSchema
                    .omit({
                        description: true,
                    })
                    .array(),
            })
        )
        .query(async ({ ctx, input }) => {
            const userId = 1;

            try {
                const result = await ctx.psql.query(
                    `
                    SELECT id, user_id, title
                    FROM ideas
                    WHERE user_id = $1;
                    `,
                    [userId]
                );

                return {
                    message: "Successfully retrieved ideas.",
                    data: result.rows,
                };
            } catch (error) {
                throw mapErrorToTRPCError(error);
            }
        }),
    get: privateProcedure
        .input(
            z.object({
                id: z.string(),
            })
        )
        .output(
            z.object({ message: z.string(), data: ideaItemSchema.optional() })
        )
        .query(async ({ ctx, input }) => {
            const { id } = input;

            try {
                const result = await ctx.psql.query(
                    `
                    SELECT id, user_id, title, description
                    FROM ideas
                    WHERE id = $1;
                    `,
                    [id]
                );

                if (result.rows.length === 0) {
                    return { message: "Item not found." };
                }

                return {
                    message: "Item retrieved successfully.",
                    data: result.rows[0],
                };
            } catch (error) {
                throw mapErrorToTRPCError(error);
            }
        }),
    saveTitle: privateProcedure
        .input(
            z.object({
                id: z.string(),
                title: z.string().min(1, "Title cannot be empty"),
            })
        )
        .output(z.object({ message: z.string() }))
        .mutation(async ({ ctx, input }) => {
            const { id, title } = input;
            const userId = 1;

            await delay(1000);

            try {
                await ctx.psql.query(
                    `
                    INSERT INTO ideas (id, user_id, title)
                    VALUES ($1, $2, $3)
                    ON CONFLICT (id)
                    DO UPDATE SET title = $3;
                    `,
                    [id, userId, title]
                );

                return {
                    message: `Successfully saved title.`,
                };
            } catch (error) {
                throw mapErrorToTRPCError(error);
            }
        }),
    saveDescription: privateProcedure
        .input(
            z.object({
                id: z.string(),
                description: z.string().min(1, "Description cannot be empty"),
            })
        )
        .output(z.object({ message: z.string() }))
        .mutation(async ({ ctx, input }) => {
            const { id, description } = input;
            const userId = 1;

            try {
                await ctx.psql.query(
                    `
                    UPDATE ideas SET description = $1 WHERE id = $2;
                    `,
                    [description, id]
                );

                return {
                    message: `Successfully saved description.`,
                };
            } catch (error) {
                throw mapErrorToTRPCError(error);
            }
        }),
    getInvitations: privateProcedure
        .input(
            z.object({
                id: z.string(),
            })
        )
        .output(
            z.object({
                message: z.string(),
                data: z.array(participantItemSchema),
            })
        )
        .query(async ({ ctx, input }) => {
            const { id: ideaId } = input;

            try {
                const result = await ctx.psql.query(
                    `
                    SELECT id, idea_id, user_id, email, state
                    FROM participants
                    WHERE idea_id = $1;
                    `,
                    [ideaId]
                );

                return {
                    message: "Participants retrieved successfully.",
                    data: result.rows,
                };
            } catch (error) {
                throw mapErrorToTRPCError(error);
            }
        }),
    invite: privateProcedure
        .input(
            z.object({
                id: z.string(),
                email: z.string().min(1, "Email cannot be empty").email(),
            })
        )
        .output(z.object({ message: z.string() }))
        .mutation(async ({ ctx, input }) => {
            const { id: ideaId, email } = input;

            try {
                const existingInvite = await ctx.psql.query(
                    "SELECT * FROM participants WHERE idea_id = $1 AND email = $2",
                    [ideaId, email]
                );

                if (existingInvite.rows.length > 0) {
                    throw new Error("Already sent invitation to this email.");
                }

                // TODO  Email Them

                await ctx.psql.query(
                    `
                    INSERT INTO participants (idea_id, email)
                    VALUES ($1, $2);
                    `,
                    [ideaId, email]
                );

                return {
                    message: `Invited successfully.`,
                };
            } catch (error) {
                throw mapErrorToTRPCError(error);
            }
        }),
    inviteResponse: privateProcedure
        .input(
            z.object({
                id: z.string(),
                email: z.string().email(),
                state: z.string(), // TODO  Validate State
            })
        )
        .output(z.object({ message: z.string() }))
        .mutation(async ({ ctx, input }) => {
            const { id: ideaId, email, state } = input;

            try {
                const existingInvite = await ctx.psql.query(
                    "SELECT * FROM participants WHERE idea_id = $1 AND email = $2 AND state != pending",
                    [ideaId, email]
                );

                if (existingInvite.rows.length == 0) {
                    throw new Error("No invitation found.");
                }

                // TODO  Update response date
                await ctx.psql.query(
                    `
                    UPDATE participants SET state = $1 WHERE id = $2;
                    `,
                    [state, ideaId]
                );

                return {
                    message:
                        state == "accepted"
                            ? `Invited accepted.`
                            : `Invited rejected.`,
                };
            } catch (error) {
                throw mapErrorToTRPCError(error);
            }
        }),
});
