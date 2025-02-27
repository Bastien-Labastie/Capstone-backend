"use strict";

const app = require("./app");
const { PORT } = require("./config");

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});

const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Required for Render PostgreSQL
});