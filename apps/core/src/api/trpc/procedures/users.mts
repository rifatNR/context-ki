import { privateProcedure, publicProcedure, router } from "@/trpc.mjs";
import { z } from "zod";
import { t } from "@/trpc.mjs";
import firebaseAdmin from "firebase-admin";
import { TRPCError } from "@trpc/server";
import { mapErrorToTRPCError } from "@/utils/trpcError.js";

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
            try {
                const decodedToken = await firebaseAdmin
                    .auth()
                    .verifyIdToken(input.token);
                const { uid, email, name, picture } = decodedToken;

                const result = await ctx.psql.query(
                    `
                    INSERT INTO users (username, email, photo)
                    VALUES ($1, $2, $3)
                    ON CONFLICT (email)
                    DO UPDATE SET
                        username = EXCLUDED.username,
                        email = EXCLUDED.email,
                        photo = EXCLUDED.photo
                    RETURNING *;
                    `,
                    [name, email, picture]
                );

                return {
                    message: "User synced",
                };
            } catch (error) {
                throw mapErrorToTRPCError(error);
            }
        }),
});
