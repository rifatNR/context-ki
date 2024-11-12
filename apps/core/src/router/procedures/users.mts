import { router } from "@/trpc.mjs";
import { z } from "zod";
import { t } from "@/trpc.mjs";

export const userRouter = router({
    getUser: t.procedure
        .input(z.object({ username: z.string() }))
        .output(z.object({ message: z.string() }))
        .query(({ ctx, input }) => {
            return {
                message: `hello ${input.username}: ${ctx.hostname}`,
            };
        }),
});
