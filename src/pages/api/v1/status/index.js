import database from "infra/database.js";

async function statusPage(request, response) {
  const resposta = await database.query("SELECT 1 + 1 as Sum;");
  response.status(200).json({ message: "Esta funcionando mano" });
}

export default statusPage;
