import { privateProcedure, publicProcedure, router } from "@/trpc.mjs";
import { z } from "zod";
import { t } from "@/trpc.mjs";
import firebaseAdmin from "firebase-admin";

export const userRouter = router({
    getUser: publicProcedure
        .input(z.object({ username: z.string() }))
        .output(z.object({ message: z.string() }))
        .query(({ ctx, input }) => {
            return {
                message: `hello ${input.username}: ${ctx.hostname}`,
            };
        }),
    syncUser: publicProcedure
        .input(z.object({ token: z.string() }))
        .output(z.object({ message: z.string() }))
        .mutation(async ({ ctx, input }) => {
            const decodedToken = await firebaseAdmin
                .auth()
                .verifyIdToken(input.token);
            const { uid, email, name, picture } = decodedToken;

            console.log("====================================");
            console.log(decodedToken);
            console.log("====================================");

            return {
                message: "User synced",
            };
        }),
});
