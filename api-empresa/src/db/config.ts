import { Sequelize } from "sequelize-typescript";
const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "@Momo1337",
  database: "departments",
  logging: false,
});
export default connection;
