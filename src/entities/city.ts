import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity({ name: "cities" })
export class CityEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar" })
    @IsString()
    zip_code: string

    @Column({ type: "varchar" })
    @IsString()
    latitude: string

    @Column({ type: "varchar" })
    @IsString()
    longitude: string

    @Column({ type: "varchar" })
    @IsString()
    city: string

    @Column({ type: "varchar" })
    @IsString()
    state: string

    @Column({ type: "varchar" })
    @IsString()
    county: string
}