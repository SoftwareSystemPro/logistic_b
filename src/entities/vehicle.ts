import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { FormEntity } from "./form";


@Entity({ name: "vehicle" })
export class VehicleEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar" })
    @IsString()
    year: string

    @Column({ type: "varchar" })
    @IsString()
    make: string

    @Column({ type: "varchar" })
    @IsString()
    model: string

    @Column({ type: "varchar" })
    @IsString()
    condition: string

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;

    @ManyToOne(() => FormEntity, (form) => form.vehicle, { onDelete: "CASCADE", onUpdate: "CASCADE" })
    form: FormEntity
}