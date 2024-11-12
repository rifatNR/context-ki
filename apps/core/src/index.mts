import express, { Request, Response } from "express";
import adminRoutes from "@/routes/admin.mjs";
import { createContext } from "@/context.mjs";
import { appRouter } from "@/router/router.mjs";
import * as trpcExpress from "@trpc/server/adapters/express";
import { expressHandler } from "trpc-playground/handlers/express";

export type AppRouter = typeof appRouter;

const app = express();
const port = 3333;

const trpcApiEndpoint = "/trpc";
const playgroundEndpoint = "/trpc-playground";

app.use(express.json());
app.use("/admin", adminRoutes);

app.use(
    trpcApiEndpoint,
    trpcExpress.createExpressMiddleware<AppRouter>({
        router: appRouter,
        createContext,
    })
);

app.use(
    playgroundEndpoint,
    await expressHandler({
        trpcApiEndpoint,
        playgroundEndpoint,
        router: appRouter,
        // uncomment this if you're using superjson
        // request: {
        //   superjson: true,
        // },
    })
);

app.get("/", async (req: Request, res: Response) => {
    res.json({ msg: "I Thought of it First." });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
