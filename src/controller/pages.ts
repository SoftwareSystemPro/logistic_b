import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { PagesEntity } from '../entities/pages';

class PagesController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(PagesEntity).find({
            order: { id: "ASC" }
        }));
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params

        res.json(await AppDataSource.getRepository(PagesEntity).find({
            where: { id: +id }
        }));
    }

    public async Post(req: Request, res: Response) {
        const { link,title,all } = req.body

        const pages = await AppDataSource.getRepository(PagesEntity).createQueryBuilder().insert().into(PagesEntity).values({ link,title,all }).returning("*").execute()

        res.json({
            status: 201,
            message: "pages created",
            data: pages.raw[0]
        })
    }

    public async Put(req: Request, res: Response) {
        try {
            const { link,title,all } = req.body
            const { id } = req.params

            const pages = await AppDataSource.getRepository(PagesEntity).createQueryBuilder().update(PagesEntity)
                .set({ link,title,all })
                .where({ id })
                .returning("*")
                .execute()

            res.json({
                status: 200,
                message: "pages updated",
                data: pages.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async Delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const pages = await AppDataSource.getRepository(PagesEntity).createQueryBuilder().delete().from(PagesEntity).where({ id }).returning("*").execute()

            res.json({
                status: 200,
                message: "pages deleted",
                data: pages.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default new PagesController();