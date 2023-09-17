import "reflect-metadata"
import { DataSource } from "typeorm"
import { AdminEntity } from "./entities/admin"
import { BlogEntity } from "./entities/blog"
import { FormEntity } from "./entities/form"
import { VehicleEntity } from "./entities/vehicle"
import { ContactEntity } from "./entities/contact"
import { CategoryEntity } from "./entities/category"
import { ServicesEntity } from "./entities/services"
import { SeoEntity } from "./entities/seo"
import { CarsEntity } from "./entities/cars"
import { CityEntity } from "./entities/city"
import { StatesEntity } from "./entities/states"
import { PagesEntity } from "./entities/pages"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "j8M*.a:gQwyV5G",
    database: "logistic_b",
    synchronize: true,
    logging: false,
    entities: [AdminEntity,BlogEntity,FormEntity,VehicleEntity,ContactEntity,CategoryEntity,ServicesEntity,SeoEntity,CarsEntity,CityEntity,StatesEntity,PagesEntity],
    migrations: [],
    subscribers: [],
})
