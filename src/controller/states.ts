import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { StatesEntity } from '../entities/states';

class StatesController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(StatesEntity).find({
            order: { id: "ASC" }
        }));
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params

        res.json(await AppDataSource.getRepository(StatesEntity).find({
            where: { id: +id }
        }));
    }
}

export default new StatesController();