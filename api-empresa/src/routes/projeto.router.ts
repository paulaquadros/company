import express, { Request, Response, Router } from "express";
import Projeto from "../models/funcionario";

const router: Router = Router();

router.get(
  "/projetos",
  async (req: Request, res: Response): Promise<Response> => {
    const allDeps: Projeto[] = await Projeto.findAll();
    return res.status(200).json(allDeps);
  }
);

router.get(
  "/projetos/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const projetos: Projeto | null = await Projeto.findByPk(id);
    return res.status(200).json(projetos);
  }
);

router.post(
  "/projetos",
  async (req: Request, res: Response): Promise<Response> => {
    const projetos: Projeto = await Projeto.create({
      ...req.body,
    });
    return res.status(201).json(projetos);
  }
);

router.put(
  "/projetos/:idProjetos",
  async (req: Request, res: Response): Promise<Response> => {
    const { idProjetos } = req.params;
    await Projeto.update({ ...req.body }, { where: { idProjetos } });
    const upProjeto: Projeto | null = await Projeto.findByPk(idProjetos);
    return res.status(200).json(upProjeto);
  }
);

router.delete(
  "/projetos/:idProjetos",
  async (req: Request, res: Response): Promise<Response> => {
    const { idProjetos } = req.params;
    const delProjetos: Projeto | null = await Projeto.findByPk(idProjetos);
    await Projeto.destroy({ where: { idProjetos } });
    return res.status(200).json(delProjetos);
  }
);

export default router;
