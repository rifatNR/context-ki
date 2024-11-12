import { Context, createContext } from "@/context.mjs";
import { initTRPC } from "@trpc/server";

export const t = initTRPC.context<Context>().create();

export const router = t.router;
