import { publicProcedure, router } from "@/trpc";
import { z } from "zod";

export const userRouter = router({
    getUser: publicProcedure
        .input(z.object({ username: z.string() }))
        .output(z.object({ message: z.string() }))
        .query(({ ctx, input }) => {
            return {
                message: `hello ${input.username}`,
            };
        }),
});
