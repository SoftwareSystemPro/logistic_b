import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { CityEntity } from '../entities/city';

class CityController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(CityEntity).find({
            order: { id: "ASC" }
        }));
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params

        res.json(await AppDataSource.getRepository(CityEntity).find({
            where: { id: +id }
        }));
    }
}

export default new CityController();