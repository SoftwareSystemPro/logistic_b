import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { VehicleEntity } from '../entities/vehicle';

class VehicleController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(VehicleEntity).find({
            order: { id: "ASC" },
            relations: {
                form: true
            }
        }));
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params

        res.json(await AppDataSource.getRepository(VehicleEntity).find({
            where: { id: +id },
            relations: {
                form: true
            }
        }));
    }

    public async Post(req: Request, res: Response) {
        const { year, make,model,condition,form } = req.body

        const vehicle = await AppDataSource.getRepository(VehicleEntity).createQueryBuilder().insert().into(VehicleEntity).values({ year, make,model,condition,form }).returning("*").execute()

        res.json({
            status: 201,
            message: "vehicle created",
            data: vehicle.raw[0]
        })
    }

    public async Put(req: Request, res: Response) {
        try {
            const { year, make,model,condition,form } = req.body
            const { id } = req.params

            const vehicle = await AppDataSource.getRepository(VehicleEntity).createQueryBuilder().update(VehicleEntity)
                .set({ year, make,model,condition,form })
                .where({ id })
                .returning("*")
                .execute()

            res.json({
                status: 200,
                message: "vehicle updated",
                data: vehicle.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async Delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const vehicle = await AppDataSource.getRepository(VehicleEntity).createQueryBuilder().delete().from(VehicleEntity).where({ id }).returning("*").execute()

            res.json({
                status: 200,
                message: "vehicle deleted",
                data: vehicle.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default new VehicleController();