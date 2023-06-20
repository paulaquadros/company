import "reflect-metadata";

import bodyParser from "body-parser";
import express from "express";
import { api } from "./api-info";
import { migracoes, MigracaoDB } from "./db/migracoes";
import connection from "./db/config";
import { VersionDB } from "./models/VersionDB";
import { Funcionarios } from "./models/funcionario";
import { Departamentos } from "./models/departamento";
import { Projetos } from "./models/projeto";
import { Dependentes } from "./models/dependente";
import { error } from "console";

const models = [VersionDB, Funcionarios, Departamentos, Projetos, Dependentes];

export class Api {
  public server: express.Application;
  public publicPath: string;

  constructor() {
    this.server = express();
    this.publicPath = `${process.cwd()}/public`;
  }

  async bootstrap(): Promise<Api> {
    try {
      await this.initModels();
      await this.migrations();
    } catch (err) {
      console.error(err);
    }

    return this;
  }

  private async initModels() {
    await connection
      .authenticate()
      .then(async () => {
        console.info("MySQL DB Conectado!");
        await connection.addModels(models);
        await connection.sync();
      })
      .then(() => {
        console.info("DB sync!");
      })
      .catch((err) => {
        console.error(err);
        throw error;
      });
  }

  private async migrations() {
    const versaoAtualBanco = await VersionDB.findByPk(api.db.id);

    const numeroVersaoAtualBanco =
      versaoAtualBanco == null ? 0 : versaoAtualBanco.numeroVersao;

    console.info("VERSAO DO BANCO API-EMPRESA: " + numeroVersaoAtualBanco);
    if (numeroVersaoAtualBanco < api.db.dbVersion) {
      console.info(migracoes);
      const models: string[] = [];

      for (let i = numeroVersaoAtualBanco; i < api.db.dbVersion; i++) {
        const migracao: MigracaoDB | undefined = migracoes.get(i + 1);

        if (migracao && migracao.consultas) {
          if (migracao.consultas !== null) {
            for (const consulta of migracao.consultas) {
              console.info("executando: " + consulta.query);
              if (models.indexOf(consulta.model) < 0) {
                await connection.query(consulta.query);
                console.info("  executed!");
              } else {
                console.info("  not executed: new model.");
              }
            }
          }
        }
      }

      if (versaoAtualBanco == null) {
        await VersionDB.create({
          id: api.db.id,
          numeroVersao: api.db.dbVersion,
        });
      } else {
        versaoAtualBanco.numeroVersao = api.db.dbVersion;
        await versaoAtualBanco.save();
      }
    }

    await connection
      .sync()
      .then(() => {
        console.info("Models sync!");
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

// const app = express();

// export class Api {
//   public server: express.Application;
//   constructor() {
//     this.server = app;
//     this.middleware();
//     this.router();
//   }
//   private middleware() {
//     this.server.use(express.json());
//   }
//   private router() {
//     this.server.use(bodyParser.json());
//     this.server.use(departamentoRouter);
//     this.server.use(funcionarioRouter);
//     this.server.use(projetoRouter);
//     this.server.use(dependenteRouter);
//   }
// }
