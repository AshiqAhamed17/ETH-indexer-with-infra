"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    connectionString: "postgresql://neondb_owner:npg_tWw5LTrhNgx6@ep-calm-shadow-a8pomceu-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
});
exports.default = pool;
