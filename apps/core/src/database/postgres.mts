import pg from "pg";

export const getPostgresPool = () => {
    // return new pg.Pool({
    //     user: process.env.POSTGRES_USER,
    //     host: process.env.POSTGRES_HOST,
    //     database: process.env.POSTGRES_DB,
    //     password: process.env.POSTGRES_PASSWORD,
    //     port: Number(process.env.POSTGRES_PORT),
    // });
    return new pg.Pool({
        connectionString: process.env.DATABASE_URL,
    });
};

export const connectDB = async (): Promise<void> => {
    try {
        const res = await getPostgresPool().query("SELECT NOW()");
        console.log(`Connected to PostgreSQL at: ${res.rows[0].now}`);
    } catch (err) {
        console.error("Error connecting to PostgreSQL:", err);
    }
};

export const closePool = (): void => {
    getPostgresPool().end(() => {
        console.log("Pool has ended");
    });
};
