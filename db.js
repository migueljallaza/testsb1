const { Pool } = require("pg");

// The secret connection string you copied earlier
const connectionString =
  "postgres://postgres:5GCg6Ec5bGf3**bb6dG5DafCF5cG-CG6@postgres.railway.internal:5432/railway";

const pool = new Pool({
  connectionString,
});

module.exports = pool;
