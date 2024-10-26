import express, { Request, Response } from "express";
import { connectDB, pool } from "@/database/db";

const app = express();
const port = 3000;

app.get("/connect", async (req: Request, res: Response) => {
    await connectDB();
    res.send("Hello, Context lagbe!!");
});

app.get("/select", async (req: Request, res: Response) => {
    try {
        await connectDB();
        const result = await pool.query("SELECT * FROM ghosts");
        console.log("Fetched Users:", result.rows);
    } catch (err) {
        console.error("Error fetching data:", err);
    }
    res.json("Hello, Context lagbe!!");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
