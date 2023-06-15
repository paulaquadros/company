import express, { Request, Response, Router } from "express";
import Departamento from "../models/departamento";

const router: Router = Router();

router.get(
  "/departamentos",
  async (req: Request, res: Response): Promise<Response> => {
    const allDeptos: Departamento[] = await Departamento.findAll();
    return res.status(200).json(allDeptos);
  }
);

router.get(
  "/departamentos/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const departamentos: Departamento | null = await Departamento.findByPk(id);
    return res.status(200).json(departamentos);
  }
);

router.post(
  "/departamentos",
  async (req: Request, res: Response): Promise<Response> => {
    const departamentos: Departamento = await Departamento.create({
      ...req.body,
    });
    return res.status(201).json(departamentos);
  }
);

router.put(
  "/departamentos/:idDepartamento",
  async (req: Request, res: Response): Promise<Response> => {
    const { idDepartamento } = req.params;
    await Departamento.update({ ...req.body }, { where: { idDepartamento } });
    const upDepartamento: Departamento | null = await Departamento.findByPk(
      idDepartamento
    );
    return res.status(200).json(upDepartamento);
  }
);

router.delete(
  "/departamentos/:idDepartamento",
  async (req: Request, res: Response): Promise<Response> => {
    const { idDepartamento } = req.params;
    const delDepartamentos: Departamento | null = await Departamento.findByPk(
      idDepartamento
    );
    await Departamento.destroy({ where: { idDepartamento } });
    return res.status(200).json(delDepartamentos);
  }
);

export default router;
