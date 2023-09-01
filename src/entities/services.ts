import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { FormEntity } from "./form";
import { CategoryEntity } from "./category";


@Entity({ name: "services" })
export class ServicesEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar" })
    @IsString()
    image: string

    @Column({ type: "varchar",nullable:true })
    @IsString()
    name: string

    @Column({ type: "varchar" })
    @IsString()
    title1: string

    @Column({ type: "varchar" })
    @IsString()
    title2: string

    @Column({ type: "varchar" })
    @IsString()
    title3: string

    @Column({ type: "varchar" })
    @IsString()
    description1: string

    @Column({ type: "varchar" })
    @IsString()
    description2: string
    
    @Column({ type: "varchar" })
    @IsString()
    description3: string

    @Column({ type: "varchar" })
    @IsString()
    status: string

    @Column({ type: "varchar",nullable:true })
    @IsString()
    link: string

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;

    @ManyToOne(() => CategoryEntity, (category) => category.services, { onDelete: "CASCADE", onUpdate: "CASCADE" })
    category: CategoryEntity
}