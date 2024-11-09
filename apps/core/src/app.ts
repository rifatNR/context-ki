import express, { Request, Response } from "express";
import { connectDB, pool } from "@/database/db";
import adminRoutes from "@/routes/admin";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/admin", adminRoutes);

app.get("/", async (req: Request, res: Response) => {
    res.json({ msg: "I Thought of it First..." });
});

app.get("/connect", async (req: Request, res: Response) => {
    await connectDB();
    res.send("Connected");
});

app.get("/test", async (req: Request, res: Response) => {
    try {
        // await connectDB();
        const result = await pool.query("SELECT * FROM ghosts");
        console.log("Fetched Users:", result.rows);
    } catch (err) {
        console.error("Error fetching data:", err);
    }
    res.json("Test");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
