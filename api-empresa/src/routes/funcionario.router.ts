import express, { Request, Response, Router } from "express";
import Funcionario from "../models/funcionario";

const router: Router = Router();

router.get(
  "/funcionarios",
  async (req: Request, res: Response): Promise<Response> => {
    const allDeps: Funcionario[] = await Funcionario.findAll();
    return res.status(200).json(allDeps);
  }
);

router.get(
  "/funcionarios/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const funcionarios: Funcionario | null = await Funcionario.findByPk(id);
    return res.status(200).json(funcionarios);
  }
);

router.post(
  "/funcionarios",
  async (req: Request, res: Response): Promise<Response> => {
    const funcionarios: Funcionario = await Funcionario.create({
      ...req.body,
    });
    return res.status(201).json(funcionarios);
  }
);

router.put(
  "/funcionarios/:idFuncionarios",
  async (req: Request, res: Response): Promise<Response> => {
    const { idFuncionarios } = req.params;
    await Funcionario.update({ ...req.body }, { where: { idFuncionarios } });
    const upFuncionario: Funcionario | null = await Funcionario.findByPk(
      idFuncionarios
    );
    return res.status(200).json(upFuncionario);
  }
);

router.delete(
  "/funcionarios/:idFuncionarios",
  async (req: Request, res: Response): Promise<Response> => {
    const { idFuncionarios } = req.params;
    const delFuncionarios: Funcionario | null = await Funcionario.findByPk(
      idFuncionarios
    );
    await Funcionario.destroy({ where: { idFuncionarios } });
    return res.status(200).json(delFuncionarios);
  }
);

export default router;
