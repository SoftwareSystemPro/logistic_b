import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity({ name: "cars" })
export class CarsEntity {
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
    category: string
}