import { router } from "@/trpc.mjs";
import { z } from "zod";
import { t } from "@/trpc.mjs";

export const ideaRouter = router({
    save: t.procedure
        .input(
            z.object({
                ideaId: z.string(),
                title: z.string().optional(),
                description: z.string().optional(),
            })
        )
        .output(z.object({ message: z.string() }))
        .mutation(async ({ ctx, input }) => {
            const { ideaId, title, description } = input;
            const userID = 1;

            try {
                await ctx.psql.query(
                    `
                    INSERT INTO ideas (id, user_id, title, description)
                    VALUES ($1, $2, $3, $4)
                    ON CONFLICT (id)
                    DO UPDATE SET title = $3, description = $4;
                    `,
                    [ideaId, userID, title, description]
                );

                return {
                    message: `Saved successfully.`,
                };
            } catch (error) {
                console.error("Error saving idea:", error);
                throw new Error("Failed to save idea.");
            }
        }),
});
