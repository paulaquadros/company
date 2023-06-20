import { Api } from "./server";
import Connection from "./db/config";

Connection.sync() //sincronizando o banco de dados com o sequelize
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida :D");
  })
  .catch((error) => {
    console.error("Erro ao conectar-se ao banco de dados:", error);
    process.exit(1);
  });

const server = new Api();

try {
  server.bootstrap().then((server) => {
    console.info(`API Empresa rodando.`);
  });
} catch (error) {
  console.error("Server failed to start.");
  console.error(error);
  process.exit(1);
}
