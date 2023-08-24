import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { SeoEntity } from '../entities/seo';

class SeoController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(SeoEntity).find({
            order: { id: "ASC" }
        }));
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params

        res.json(await AppDataSource.getRepository(SeoEntity).find({
            where: { id: +id }
        }));
    }

    public async Post(req: Request, res: Response) {
        const { meta_title, meta_description, meta_key } = req.body

        const seo = await AppDataSource.getRepository(SeoEntity).createQueryBuilder().insert().into(SeoEntity).values({ meta_title, meta_description, meta_key }).returning("*").execute()

        res.json({
            status: 201,
            message: "seo created",
            data: seo.raw[0]
        })
    }

    public async Put(req: Request, res: Response) {
        try {
            const { meta_title, meta_description, meta_key } = req.body
            const { id } = req.params

            const seo = await AppDataSource.getRepository(SeoEntity).createQueryBuilder().update(SeoEntity)
                .set({ meta_title, meta_description, meta_key })
                .where({ id })
                .returning("*")
                .execute()

            res.json({
                status: 200,
                message: "seo updated",
                data: seo.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async Delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const seo = await AppDataSource.getRepository(SeoEntity).createQueryBuilder().delete().from(SeoEntity).where({ id }).returning("*").execute()

            res.json({
                status: 200,
                message: "seo deleted",
                data: seo.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default new SeoController();