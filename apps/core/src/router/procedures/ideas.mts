import { router } from "@/trpc.mjs";
import { z } from "zod";
import { t } from "@/trpc.mjs";
import { Pool } from "pg";

const itemSchema = z.object({
    id: z.string(),
    user_id: z.number(),
    title: z.string().optional(),
    description: z.string().optional(),
});
export const ideaRouter = router({
    get: t.procedure
        .input(
            z.object({
                id: z.string(),
            })
        )
        .output(z.object({ message: z.string(), data: itemSchema.optional() }))
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
                console.error("Error retrieving item:", error);
                throw new Error("Failed to retrieve item.");
            }
        }),
    save: t.procedure
        .input(
            z.object({
                id: z.string(),
                title: z.string().optional(),
                description: z.string().optional(),
            })
        )
        .output(z.object({ message: z.string() }))
        .mutation(async ({ ctx, input }) => {
            const { id, title, description } = input;
            const userId = 1;

            try {
                await ctx.psql.query(
                    `
                    INSERT INTO ideas (id, user_id, title, description)
                    VALUES ($1, $2, $3, $4)
                    ON CONFLICT (id)
                    DO UPDATE SET title = $3, description = $4;
                    `,
                    [id, userId, title ?? "", description ?? ""]
                );

                return {
                    message: `Saved successfully.`,
                };
            } catch (error) {
                console.error("Error saving idea:", error);
                throw new Error("Failed to save idea.");
            }
        }),
    invite: t.procedure
        .input(
            z.object({
                id: z.string(),
                email: z.string().email(),
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
                console.error("Error saving idea:", error);
                if (error instanceof Error) {
                    throw new Error(error.message);
                } else {
                    throw new Error("An unexpected error occurred");
                }
            }
        }),
    inviteResponse: t.procedure
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
                console.error("Error saving idea:", error);
                if (error instanceof Error) {
                    throw new Error(error.message);
                } else {
                    throw new Error("An unexpected error occurred");
                }
            }
        }),
});
