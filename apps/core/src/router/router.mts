import { userRouter } from "@/router/procedures/users.mjs";
import { router } from "@/trpc.mjs";

export const appRouter = router({
    users: userRouter,
});
