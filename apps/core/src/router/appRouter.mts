import { ideaRouter } from "@/router/procedures/ideas.mjs";
import { userRouter } from "@/router/procedures/users.mjs";
import { router, t } from "@/trpc.mjs";
import { z } from "zod";

export const appRouter = router({
    users: userRouter,
    ideas: ideaRouter,
    hello: t.procedure
        .input(z.object({ name: z.string().optional() }))
        .query(({ input }) => {
            return {
                message: `Hello, ${input.name ?? "world"}!`,
            };
        }),
    getTime: t.procedure.query(() => {
        return { time: new Date().toISOString() };
    }),
});

export type AppRouter = typeof appRouter;
