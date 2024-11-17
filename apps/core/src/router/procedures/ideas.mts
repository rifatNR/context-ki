import { router } from "@/trpc.mjs";
import { z } from "zod";
import { t } from "@/trpc.mjs";

export const ideaRouter = router({
    save: t.procedure
        .input(
            z.object({
                idea_id: z.string().optional(),
                title: z.string().optional(),
                description: z.string().optional(),
            })
        )
        .output(z.object({ message: z.string() }))
        .query(({ ctx, input }) => {
            return {
                message: `Saved successfully.`,
            };
        }),
});
