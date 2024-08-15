import { Request, Response } from "express";
import { AppDataSource } from "./data-source";
import { Product } from "./entity/Product";
import { ProductType } from "./entity/ProductType";
import { Customer } from "./entity/Customer";

const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
    origin: 'http://localhost:4200', // อนุญาตให้เข้าถึง API จากโดเมนนี้เท่านั้น
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true // เปิดใช้งานการส่ง credentials
};

app.use(cors(corsOptions));

AppDataSource.initialize().then(async () => {
    app.post('/product', async (req: Request, res: Response) => {
        console.log("Inserting a new product into the database...");
        
        if (req.body.p_price == null || req.body.p_price === undefined) {
            return res.status(400).json({ message: 'p_price is required and must not be null or undefined' });
        }
    
        const newProduct = new Product();
        newProduct.p_name = req.body.p_name;
        newProduct.p_img = req.body.p_img;
        newProduct.p_descript = req.body.p_descript;
        newProduct.p_size = req.body.p_size;
        newProduct.p_price = req.body.p_price;
        newProduct.p_quantity = req.body.p_quantity;
        
        // Assuming productType is sent in the request body
        const productTypeId = req.body.productType;
        const productType = await AppDataSource.manager.findOne(ProductType, productTypeId);
        if (!productType) {
            return res.status(400).json({ message: 'Invalid productType' });
        }
        newProduct.productType = productType;

        const savedProduct = await AppDataSource.manager.save(newProduct);
        console.log("Saved a new product with id: " + savedProduct.p_id);
        res.json(savedProduct);
    });

    app.get('/product', async (req: Request, res: Response) => {
        console.log("Fetching products...");
        const products = await AppDataSource.manager.find(Product, { relations: ["productType"] });
        res.json(products);
    });

    app.get('/productTypes', async (req: Request, res: Response) => {
        console.log("Fetching product types...");
        const productTypes = await AppDataSource.manager.find(ProductType);
        res.json(productTypes);
    });
    
    //user
    app.get('/profile', async (req, res) => {
        const customer = await AppDataSource.manager.find(Customer)
        res.json(customer)
    })

    //profile
    app.post('/profile', async (req, res) => {
        const customer = new Customer()
        console.log("Test log :",req.body)

        console.log("Inserting a new order into the database...");
        customer.c_id = req.body.c_id
        customer.c_name = req.body.c_name
        customer.c_tel = req.body.c_tel
        customer.c_country = req.body.c_country
        customer.c_address = req.body.c_address
        customer.c_city = req.body.c_city
        customer.c_province = req.body.c_province
        customer.c_postalcode = req.body.c_postalcode
        const customers = await AppDataSource.manager.save(Customer)
        res.json(customers)
    })
});

app.listen(3000, () => {
    console.log('Start server at port 3000.')
});
