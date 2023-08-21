import "reflect-metadata"
import { DataSource } from "typeorm"
import { AdminEntity } from "./entities/admin"
import { BlogEntity } from "./entities/blog"
import { FormEntity } from "./entities/form"
import { VehicleEntity } from "./entities/vehicle"
import { ContactEntity } from "./entities/contact"
import { CategoryEntity } from "./entities/category"
import { ServicesEntity } from "./entities/services"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "islom_01",
    database: "logistic_b",
    synchronize: true,
    logging: false,
    entities: [AdminEntity,BlogEntity,FormEntity,VehicleEntity,ContactEntity,CategoryEntity,ServicesEntity],
    migrations: [],
    subscribers: [],
})
