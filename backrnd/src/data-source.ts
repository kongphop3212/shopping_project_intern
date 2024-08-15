import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Product } from "./entity/Product"
import { ProductType } from "./entity/ProductType"
import { Order } from "./entity/Orders"
import { Customer } from "./entity/Customer"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "modelmd26",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User, Customer, Product, ProductType],
    migrations: [],
    subscribers: [],
})
