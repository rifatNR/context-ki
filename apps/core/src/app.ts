import express, { Request, Response } from "express";
import { connectDB, pool } from "@/database/db";
import adminRoutes from "@/routes/admin";

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
