import pg from "pg";
import * as dotenv from "dotenv";

dotenv.config();

export const pool = new pg.Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: Number(process.env.PGPORT),
});

export const getPostgresPool = () => {
    return new pg.Pool({
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: Number(process.env.PGPORT),
    });
};

// export const connectDB = async (): Promise<void> => {
//     try {
//         const res = await pool.query("SELECT NOW()");
//         console.log(`Connected to PostgreSQL at: ${res.rows[0].now}`);
//     } catch (err) {
//         console.error("Error connecting to PostgreSQL:", err);
//     }
// };

// export const insertUser = async (name: string, age: number): Promise<void> => {
//     const query = "INSERT INTO users(name, age) VALUES($1, $2) RETURNING *";
//     const values = [name, age];

//     try {
//         const result = await pool.query(query, values);
//         console.log("Inserted User:", result.rows[0]);
//     } catch (err) {
//         console.error("Error inserting data:", err);
//     }
// };

export const closePool = (): void => {
    pool.end(() => {
        console.log("Pool has ended");
    });
};

// Call this function when exiting the application
// process.on('exit', closePool);
