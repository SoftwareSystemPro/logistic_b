import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { ContactEntity } from '../entities/contact';

class ContactController {
    public async Get(req: Request, res: Response): Promise<void> {
        res.json(await AppDataSource.getRepository(ContactEntity).find({
            order: { id: "ASC" },
            relations: {
                form: true
            }
        }));
    }

    public async GetId(req: Request, res: Response): Promise<void> {
        const { id } = req.params

        res.json(await AppDataSource.getRepository(ContactEntity).find({
            where: { id: +id },
            relations: {
                form: true
            }
        }));
    }

    public async Post(req: Request, res: Response) {
        const { pick_up_date, full_name, phone, email, form } = req.body

        const contact = await AppDataSource.getRepository(ContactEntity).createQueryBuilder().insert().into(ContactEntity).values({ pick_up_date, full_name, phone, email, form }).returning("*").execute()

        res.json({
            status: 201,
            message: "contact created",
            data: contact.raw[0]
        })
    }

    public async Put(req: Request, res: Response) {
        try {
            const { pick_up_date, full_name, phone, email, form } = req.body
            const { id } = req.params

            const contact = await AppDataSource.getRepository(ContactEntity).createQueryBuilder().update(ContactEntity)
                .set({ pick_up_date, full_name, phone, email, form })
                .where({ id })
                .returning("*")
                .execute()

            res.json({
                status: 200,
                message: "contact updated",
                data: contact.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async Delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            const contact = await AppDataSource.getRepository(ContactEntity).createQueryBuilder().delete().from(ContactEntity).where({ id }).returning("*").execute()

            res.json({
                status: 200,
                message: "contact deleted",
                data: contact.raw[0]
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default new ContactController();