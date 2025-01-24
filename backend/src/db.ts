import { Pool } from "pg";

const pool = new Pool({
    connectionString: "postgresql://neondb_owner:npg_tWw5LTrhNgx6@ep-calm-shadow-a8pomceu-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
});

export default pool;