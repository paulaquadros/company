import express from "express";
import bodyParser from "body-parser";
import departamentoRouter from "./routes/departamento.router";
import funcionarioRouter from "./routes/funcionario.router";
import projetoRouter from "./routes/projeto.router";
import dependenteRouter from "./routes/dependente.router";

const app = express();

export class Api {
  public server: express.Application;
  constructor() {
    this.server = app;
    this.middleware();
    this.router();
  }
  private middleware() {
    this.server.use(express.json());
  }
  private router() {
    this.server.use(bodyParser.json());
    this.server.use(departamentoRouter);
    this.server.use(funcionarioRouter);
    this.server.use(projetoRouter);
    this.server.use(dependenteRouter);
  }
}
