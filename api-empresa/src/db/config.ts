import { Sequelize } from "sequelize-typescript";
import Departamento from "../models/departamento";
import Funcionario from "../models/funcionario";
import Projeto from "../models/projeto";
import Dependente from "../models/dependente";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "@Momo1337",
  database: "departments",
  logging: false,
  models: [Departamento, Funcionario, Projeto, Dependente],
});

export default connection;
