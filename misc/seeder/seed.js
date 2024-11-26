import pg from "pg";
import dotenv from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

const { Pool } = pg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, "../../.env") });

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const userId = "KRB0L40mKZSDVbCHTaMKWnZb4jT2";
const ideas = [
    {
        id: uuidv4(),
        userId: userId,
        title: "This is my new billion $ Idea.",
        description: "..description of This is my new billion $ Idea.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "An app that tracks your plants’ health and reminds you when to water, prune, or fertilize.",
        description:
            "..description of An app that tracks your plants’ health and reminds you when to water, prune, or fertilize.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "Aliqua ut voluptate reprehenderit cupidatat in. Voluptate irure et quis eu in nisi sit veniam non commodo. Magna incididunt minim enim dolor commodo dolor minim quis cillum laboris incididunt.",
        description:
            "..description of Aliqua ut voluptate reprehenderit cupidatat in. Voluptate irure et quis eu in nisi sit veniam non commodo. Magna incididunt minim enim dolor commodo dolor minim quis cillum laboris incididunt.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "Quotify: Daily Inspiration Dashboard. A browser extension that generates a new motivational quote and matching aesthetic every day.",
        description:
            "..description of Quotify: Daily Inspiration Dashboard. A browser extension that generates a new motivational quote and matching aesthetic every day.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "A digital journal to log your pet's milestones, photos, and health records in one place.",
        description:
            "..description of A digital journal to log your pet's milestones, photos, and health records in one place.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "CodeQuest: Gamified Coding Challenges",
        description: "..description of CodeQuest: Gamified Coding Challenges",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "A service that summarizes movies or TV series episodes into quick, text-based recaps.",
        description:
            "..description of A service that summarizes movies or TV series episodes into quick, text-based recaps.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "An app to catalog your physical bookshelves by scanning book spines using AI.",
        description:
            "..description of An app to catalog your physical bookshelves by scanning book spines using AI.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "GamePlan: Party Game Generator. Generates customized party games based on the size and preferences of your group.",
        description:
            "..description of GamePlan: Party Game Generator. Generates customized party games based on the size and preferences of your group.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "A drag-and-drop mood board tool with AI-powered color palette and style suggestions.",
        description:
            "..description of A drag-and-drop mood board tool with AI-powered color palette and style suggestions.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "ChordCraft: Personalized Song Generator",
        description: "..description of ChordCraft: Personalized Song Generator",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "Tracks your pet’s health, feeding schedules, and activities with smart reminders.",
        description:
            "..description of Tracks your pet’s health, feeding schedules, and activities with smart reminders.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "Consequat incididunt adipisicing non tempor sunt id officia reprehenderit.",
        description:
            "..description of Consequat incididunt adipisicing non tempor sunt id officia reprehenderit.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "Ex deserunt voluptate do excepteur duis nisi adipisicing tempor eiusmod dolor enim non veniam.",
        description:
            "..description of Ex deserunt voluptate do excepteur duis nisi adipisicing tempor eiusmod dolor enim non veniam.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "Ullamco consectetur sit irure ad id exercitation ullamco dolore voluptate.",
        description:
            "..description of Ullamco consectetur sit irure ad id exercitation ullamco dolore voluptate.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "Dolor quis laboris fugiat aliqua cillum nulla mollit occaecat culpa elit excepteur.",
        description:
            "..description of Dolor quis laboris fugiat aliqua cillum nulla mollit occaecat culpa elit excepteur.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "Consectetur do ullamco pariatur magna.",
        description: "..description of Consectetur do ullamco pariatur magna.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "In ad proident aute sunt.",
        description: "..description of In ad proident aute sunt.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "Consectetur id duis culpa esse est sit in amet consequat consequat excepteur Lorem mollit nulla.",
        description:
            "..description of Consectetur id duis culpa esse est sit in amet consequat consequat excepteur Lorem mollit nulla.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "Adipisicing culpa cillum aute magna irure incididunt reprehenderit ullamco cupidatat excepteur reprehenderit.",
        description:
            "..description of Adipisicing culpa cillum aute magna irure incididunt reprehenderit ullamco cupidatat excepteur reprehenderit.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "Duis mollit occaecat non cillum nisi qui cupidatat non proident.",
        description:
            "..description of Duis mollit occaecat non cillum nisi qui cupidatat non proident.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "In veniam laboris id ex velit consectetur nulla Lorem sunt sint.",
        description:
            "..description of In veniam laboris id ex velit consectetur nulla Lorem sunt sint.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "Id laboris labore cupidatat laboris consequat officia ex aliqua fugiat non.",
        description:
            "..description of Id laboris labore cupidatat laboris consequat officia ex aliqua fugiat non.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "Non dolore laboris mollit occaecat laborum laboris cupidatat irure fugiat culpa excepteur dolore consectetur nulla.",
        description:
            "..description of Non dolore laboris mollit occaecat laborum laboris cupidatat irure fugiat culpa excepteur dolore consectetur nulla.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "Do minim ex pariatur ea nulla in voluptate commodo eu.",
        description:
            "..description of Do minim ex pariatur ea nulla in voluptate commodo eu.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "Excepteur irure commodo nostrud aliqua occaecat labore anim aute nisi exercitation tempor dolore veniam ullamco.",
        description:
            "..description of Excepteur irure commodo nostrud aliqua occaecat labore anim aute nisi exercitation tempor dolore veniam ullamco.",
    },
    {
        id: uuidv4(),
        userId: userId,
        title: "Aute magna magna ex tempor laboris fugiat nulla ut sunt excepteur sint.",
        description:
            "..description of Aute magna magna ex tempor laboris fugiat nulla ut sunt excepteur sint.",
    },
];

const seedDatabase = async () => {
    try {
        console.log("Seeding database...");

        let result, totalCount;
        result = await pool.query("SELECT COUNT(*) AS total FROM ideas");
        totalCount = result.rows[0].total;
        console.log("Data Count Before: ", totalCount);

        for (const item of ideas) {
            await pool.query(
                "INSERT INTO ideas (id, user_id, title, description) VALUES ($1, $2, $3, $4) ON CONFLICT (id) DO NOTHING",
                [item.id, item.userId, item.title, item.description]
            );
        }

        result = await pool.query("SELECT COUNT(*) AS total FROM ideas");
        totalCount = result.rows[0].total;
        console.log("Data Count After: ", totalCount);

        console.log("Seeding completed successfully!");
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        await pool.end();
    }
};

seedDatabase();
