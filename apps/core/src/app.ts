import express, { Request, Response } from "express";
import adminRoutes from "@/routes/admin";
import { appRouter } from "@/router/router";
import * as trpcExpress from "@trpc/server/adapters/express";
import { expressHandler } from "trpc-playground/handlers/express";

export type appRouter = typeof appRouter;

const app = express();
const port = 3000;

const trpcApiEndpoint = "/api/trpc";
const playgroundEndpoint = "/api/trpc-playground";

app.use(express.json());
app.use("/admin", adminRoutes);

app.use(
    trpcApiEndpoint,
    trpcExpress.createExpressMiddleware({
        router: appRouter,
    })
);

const setupPlayground = async () => {
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
};

setupPlayground();

app.get("/", async (req: Request, res: Response) => {
    res.json({ msg: "I Thought of it First." });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
