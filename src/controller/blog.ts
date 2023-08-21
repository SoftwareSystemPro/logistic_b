import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { BlogEntity } from '../entities/blog';

class BlogController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(BlogEntity).find({
            order: { id: "ASC" }
        }));
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params

        res.json(await AppDataSource.getRepository(BlogEntity).find({
            where: { id: +id }
        }));
    }

    public async Post(req: Request, res: Response) {
        const { link,description,date } = req.body

        const blog = await AppDataSource.getRepository(BlogEntity).createQueryBuilder().insert().into(BlogEntity).values({ link,description,date }).returning("*").execute()

        res.json({
            status: 201,
            message: "blog created",
            data: blog.raw[0]
        })
    }

    public async Put(req: Request, res: Response) {
        try {
            const { link,description,date } = req.body
            const { id } = req.params

            const blog = await AppDataSource.getRepository(BlogEntity).createQueryBuilder().update(BlogEntity)
                .set({ link,description,date })
                .where({ id })
                .returning("*")
                .execute()

            res.json({
                status: 200,
                message: "blog updated",
                data: blog.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async Delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const blog = await AppDataSource.getRepository(BlogEntity).createQueryBuilder().delete().from(BlogEntity).where({ id }).returning("*").execute()

            res.json({
                status: 200,
                message: "blog deleted",
                data: blog.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default new BlogController();