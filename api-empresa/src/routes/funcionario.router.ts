import { Dependentes } from "./../models/dependente";
import { Funcionarios } from "./../models/funcionario";
import express, { Request, Response, Router } from "express";

const router: Router = Router();

router.get(
  "/funcionarios",
  async (req: Request, res: Response): Promise<Response> => {
    const allDeps: Funcionarios[] = await Funcionarios.findAll();
    return res.status(200).json(allDeps);
  }
);

router.get(
  "/funcionarios/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const funcionarios: Funcionarios | null = await Funcionarios.findByPk(id);
    return res.status(200).json(funcionarios);
  }
);

router.post(
  "/funcionarios",
  async (req: Request, res: Response): Promise<Response> => {
    const funcionarios: Funcionarios = await Funcionarios.create({
      ...req.body,
    });
    return res.status(201).json(funcionarios);
  }
);

router.put(
  "/funcionarios/:idFuncionarios",
  async (req: Request, res: Response): Promise<Response> => {
    const { idFuncionarios } = req.params;
    await Funcionarios.update({ ...req.body }, { where: { idFuncionarios } });
    const upFuncionario: Funcionarios | null = await Funcionarios.findByPk(
      idFuncionarios
    );
    return res.status(200).json(upFuncionario);
  }
);

router.delete(
  "/funcionarios/:idFuncionarios",
  async (req: Request, res: Response): Promise<Response> => {
    const { idFuncionarios } = req.params;
    const delFuncionarios: Funcionarios | null = await Funcionarios.findByPk(
      idFuncionarios
    );
    await Funcionarios.destroy({ where: { idFuncionarios } });
    return res.status(200).json(delFuncionarios);
  }
);

router.get(
  "/funcionarios/:idFuncionarios/dependentes",
  async (req: Request, res: Response): Promise<Response> => {
    const { idFuncionarios } = req.params;
    const dependentes: Dependentes[] = await Dependentes.findAll({
      where: { idFuncionarios },
    });
    return res.status(200).json(dependentes);
  }
);

export default router;
