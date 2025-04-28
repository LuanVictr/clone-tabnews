import { Client } from "pg";

async function query(query) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  await client.connect();

  const response = await client.query(query);

  console.warn(response.rows[0]);

  await client.end();
}

export default { query: query };
