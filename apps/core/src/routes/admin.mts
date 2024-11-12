import { pool } from "@/database/postgres.mjs";
import { Router, type Router as ExpressRouter } from "express";

const router: ExpressRouter = Router();

router.get("/idea", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM ideas");
        console.log("Fetched:", result.rows);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({
            error,
            msg: "An error occurred while getting all ideas.",
        });
    }
});

router.post("/idea/create", async (req, res) => {
    const { title, subtitle, details, image, claimed_date } = req.body || {};

    const createdAt = new Date();
    const updated_at = new Date();
    const query = `
      INSERT INTO ideas (title, subtitle, details, image, claimed_date, created_at, updated_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;

    try {
        const result = await pool.query(query, [
            title,
            subtitle || null,
            details || null,
            image || null,
            claimed_date || null,
            createdAt,
            updated_at,
        ]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("Error inserting idea:", error);
        res.status(500).json({
            error,
            msg: "An error occurred while creating the idea.",
        });
    }
});

export default router;
