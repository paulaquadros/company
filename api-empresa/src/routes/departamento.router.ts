import { Departamentos } from "./../models/departamento";
import express, { Request, Response, Router } from "express";

const router: Router = Router();

router.get(
  "/departamentos",
  async (req: Request, res: Response): Promise<Response> => {
    const allDeptos: Departamentos[] = await Departamentos.findAll();
    return res.status(200).json(allDeptos);
  }
);

router.get(
  "/departamentos/:id",
  async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const departamentos: Departamentos | null = await Departamentos.findByPk(
      id
    );
    return res.status(200).json(departamentos);
  }
);

router.post(
  "/departamentos",
  async (req: Request, res: Response): Promise<Response> => {
    const departamentos: Departamentos = await Departamentos.create({
      ...req.body,
    });
    return res.status(201).json(departamentos);
  }
);

router.put(
  "/departamentos/:idDepartamento",
  async (req: Request, res: Response): Promise<Response> => {
    const { idDepartamento } = req.params;
    await Departamentos.update({ ...req.body }, { where: { idDepartamento } });
    const upDepartamento: Departamentos | null = await Departamentos.findByPk(
      idDepartamento
    );
    return res.status(200).json(upDepartamento);
  }
);

router.delete(
  "/departamentos/:idDepartamento",
  async (req: Request, res: Response): Promise<Response> => {
    const { idDepartamento } = req.params;
    const delDepartamentos: Departamentos | null = await Departamentos.findByPk(
      idDepartamento
    );
    await Departamentos.destroy({ where: { idDepartamento } });
    return res.status(200).json(delDepartamentos);
  }
);

export default router;
