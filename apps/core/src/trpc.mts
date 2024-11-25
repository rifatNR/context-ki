import { Context, createContext } from "@/context.mjs";
import { initTRPC, TRPCError } from "@trpc/server";
import { ZodError } from "zod";

export const t = initTRPC.context<Context>().create({
    errorFormatter(opts) {
        const { shape, error } = opts;
        return {
            ...shape,
            data: {
                ...shape.data,
                zodError:
                    error.code === "BAD_REQUEST" &&
                    error.cause instanceof ZodError
                        ? error.cause.flatten()
                        : null,
            },
        };
    },
});

export const publicProcedure = t.procedure;

export const privateProcedure = publicProcedure.use(async (opts) => {
    const { ctx } = opts;

    const authorization = ctx.headers.authorization;

    if (!authorization || !authorization.startsWith("Bearer ")) {
        throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "No Bearer token provided",
        });
    }

    const token = authorization.split(" ")[1];

    return opts.next({
        ctx: {
            user: {
                token: token,
            },
        },
    });
});

export const router = t.router;
