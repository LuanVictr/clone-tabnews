import { Client } from "pg";

async function query(query) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    ssl: process.env.NODE_ENV === "development" ? false : true,
  });

  try {
    await client.connect();
    const response = await client.query(query);
    return response;
  } catch (error) {
    console.error("Error executing query", error.stack);
    throw error;
  } finally {
    await client.end();
  }
}

export default { query: query };
