import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { ServicesEntity } from "./services";


@Entity({ name: "category" })
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar" })
    @IsString()
    category_name: string

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;

    @OneToMany(()=>ServicesEntity,(services)=>services.category,{onDelete:"CASCADE",onUpdate:"CASCADE"})
    services:ServicesEntity[]
}