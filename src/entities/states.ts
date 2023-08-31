import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity({ name: "states" })
export class StatesEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar" })
    @IsString()
    city: string

    @Column({ type: "varchar" })
    @IsString()
    state: string
}