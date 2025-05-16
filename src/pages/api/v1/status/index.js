import database from "infra/database.js";

async function statusPage(request, response) {
  const resposta = await database.query("SELECT 1 + 1 as Sum;");
  const databaseName = process.env.POSTGRES_DB;
  const updatedAt = new Date().toISOString();
  const databaseVersion = await database.query("SHOW server_version;");
  const databaseMaxConnections = await database.query("SHOW max_connections;");
  const numberOfConnections = await database.query({
    text: "SELECT count(*)::int from pg_stat_activity p WHERE p.datname = $1;",
    values: [databaseName],
  });
  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersion.rows[0].server_version,
        max_connections: parseInt(
          databaseMaxConnections.rows[0].max_connections,
        ),
        opened_connections: numberOfConnections.rows[0].count,
      },
    },
  });
}

export default statusPage;
