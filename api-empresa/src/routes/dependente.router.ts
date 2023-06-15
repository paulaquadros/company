import express, { Request, Response, Router } from "express";
import Dependente from "../models/dependente";

const router: Router = Router();

router.get(
  "/dependentes",
  async (req: Request, res: Response): Promise<Response> => {
    const allDeps: Dependente[] = await Dependente.findAll();
    return res.status(200).json(allDeps);
  }
);

router.get(
  "/dependentes/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const dependentes: Dependente | null = await Dependente.findByPk(id);
    return res.status(200).json(dependentes);
  }
);

router.post(
  "/dependentes",
  async (req: Request, res: Response): Promise<Response> => {
    const dependentes: Dependente = await Dependente.create({
      ...req.body,
    });
    return res.status(201).json(dependentes);
  }
);

router.put(
  "/dependentes/:idDependente",
  async (req: Request, res: Response): Promise<Response> => {
    const { idDependente } = req.params;
    await Dependente.update({ ...req.body }, { where: { idDependente } });
    const upDependente: Dependente | null = await Dependente.findByPk(
      idDependente
    );
    return res.status(200).json(upDependente);
  }
);

router.delete(
  "/dependentes/:idDependentes",
  async (req: Request, res: Response): Promise<Response> => {
    const { idDependentes } = req.params;
    const delDependentes: Dependente | null = await Dependente.findByPk(
      idDependentes
    );
    await Dependente.destroy({ where: { idDependentes } });
    return res.status(200).json(delDependentes);
  }
);

export default router;
