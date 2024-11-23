import { Context, createContext } from "@/context.mjs";
import { initTRPC } from "@trpc/server";
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

export const router = t.router;
