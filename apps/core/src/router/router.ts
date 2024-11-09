import { userRouter } from "@/router/procedures/users";
import { router } from "@/trpc";

export const appRouter = router({
    users: userRouter,
});
