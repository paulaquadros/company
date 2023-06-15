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

const start = async (): Promise<void> => {
  //iniciando o servidor
  try {
    new Api().server.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
