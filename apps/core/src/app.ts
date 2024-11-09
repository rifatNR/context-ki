import express, { Request, Response } from "express";
import adminRoutes from "@/routes/admin";
import { appRouter } from "@/router/router";

export type appRouter = typeof appRouter;

const app = express();
const port = 3000;

app.use(express.json());

app.use("/admin", adminRoutes);

app.get("/", async (req: Request, res: Response) => {
    res.json({ msg: "I Thought of it First." });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
