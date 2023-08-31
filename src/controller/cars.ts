import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { CarsEntity } from '../entities/cars';

class CarsController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(CarsEntity).find({
            order: { id: "ASC" }
        }));
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params

        res.json(await AppDataSource.getRepository(CarsEntity).find({
            where: { id: +id }
        }));
    }
}

export default new CarsController();