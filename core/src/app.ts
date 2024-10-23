import express, { Request, Response } from "express";
import { test } from "@/folder/test.js";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, Context lagbe!!");
});

// Start the server
app.listen(port, () => {
    console.log(test());
    console.log(`Server is running at http://localhost:${port}`);
});
