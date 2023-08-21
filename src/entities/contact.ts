import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { FormEntity } from "./form";


@Entity({ name: "contact" })
export class ContactEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar" })
    @IsString()
    pick_up_date: string

    @Column({ type: "varchar" })
    @IsString()
    full_name: string

    @Column({ type: "varchar" })
    @IsString()
    phone: string

    @Column({ type: "varchar" })
    @IsString()
    email: string

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;

    @ManyToOne(() => FormEntity, (form) => form.contact, { onDelete: "CASCADE", onUpdate: "CASCADE" })
    form: FormEntity
}