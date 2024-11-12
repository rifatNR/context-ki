import { getPostgresPool } from "@/database/postgres.mjs";
import * as trpcExpress from "@trpc/server/adapters/express";

export const createContext = async ({
    req,
    res,
}: trpcExpress.CreateExpressContextOptions) => {
    const headers = req.headers;
    const hostname = req.hostname;
    const psql = getPostgresPool();

    return {
        hostname: hostname,
        headers: headers,
        psql: psql,
    };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
