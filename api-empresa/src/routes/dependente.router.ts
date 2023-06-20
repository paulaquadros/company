import { Dependentes } from "./../models/dependente";
import express, { Request, Response, Router } from "express";

const router: Router = Router();

router.get(
  "/dependentes",
  async (req: Request, res: Response): Promise<Response> => {
    const allDeps: Dependentes[] = await Dependentes.findAll();
    return res.status(200).json(allDeps);
  }
);

router.get(
  "/dependentes/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const dependentes: Dependentes | null = await Dependentes.findByPk(id);
    return res.status(200).json(dependentes);
  }
);

router.post(
  "/dependentes",
  async (req: Request, res: Response): Promise<Response> => {
    const dependentes: Dependentes = await Dependentes.create({
      ...req.body,
    });
    return res.status(201).json(dependentes);
  }
);

router.put(
  "/dependentes/:idDependente",
  async (req: Request, res: Response): Promise<Response> => {
    const { idDependente } = req.params;
    await Dependentes.update({ ...req.body }, { where: { idDependente } });
    const upDependente: Dependentes | null = await Dependentes.findByPk(
      idDependente
    );
    return res.status(200).json(upDependente);
  }
);

router.delete(
  "/dependentes/:idDependentes",
  async (req: Request, res: Response): Promise<Response> => {
    const { idDependentes } = req.params;
    const delDependentes: Dependentes | null = await Dependentes.findByPk(
      idDependentes
    );
    await Dependentes.destroy({ where: { idDependentes } });
    return res.status(200).json(delDependentes);
  }
);

export default router;
