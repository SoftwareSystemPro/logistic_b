import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { FormEntity } from '../entities/form';

class FormController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(FormEntity).find({
            order: { id: "ASC" },
            relations: {
                vehicle: true,
                contact: true
            }
        }));
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params

        res.json(await AppDataSource.getRepository(FormEntity).find({
            where: { id: +id },
            relations: {
                vehicle: true,
                contact: true
            }
        }));
    }

    public async Post(req: Request, res: Response) {
        const { transport_from, transport_to } = req.body

        const form = await AppDataSource.getRepository(FormEntity).createQueryBuilder().insert().into(FormEntity).values({ transport_from, transport_to }).returning("*").execute()

        res.json({
            status: 201,
            message: "form created",
            data: form.raw[0]
        })
    }

    public async Put(req: Request, res: Response) {
        try {
            const { transport_from, transport_to } = req.body
            const { id } = req.params

            const form = await AppDataSource.getRepository(FormEntity).createQueryBuilder().update(FormEntity)
                .set({ transport_from, transport_to })
                .where({ id })
                .returning("*")
                .execute()

            res.json({
                status: 200,
                message: "form updated",
                data: form.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async Delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const form = await AppDataSource.getRepository(FormEntity).createQueryBuilder().delete().from(FormEntity).where({ id }).returning("*").execute()

            res.json({
                status: 200,
                message: "form deleted",
                data: form.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default new FormController();