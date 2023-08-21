import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { VehicleEntity } from "./vehicle";
import { ContactEntity } from "./contact";


@Entity({ name: "form" })
export class FormEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar" })
    @IsString()
    transport_from: string

    @Column({ type: "varchar" })
    @IsString()
    transport_to: string

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;

    @OneToMany(()=>VehicleEntity,(vehicle)=>vehicle.form,{onDelete:"CASCADE",onUpdate:"CASCADE"})
    vehicle:VehicleEntity[]
    
    @OneToMany(()=>ContactEntity,(contact)=>contact.form,{onDelete:"CASCADE",onUpdate:"CASCADE"})
    contact:ContactEntity[]
}