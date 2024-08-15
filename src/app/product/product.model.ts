import { Size } from "backrnd/src/entity/Product";

export class Product {
    p_id!: number;
    p_name!: string;
    p_img!: string;
    p_descript!: string;
    p_size!: Size; 
    p_price!: number;
    p_quantity!: number;
}

export class ProductType {
    t_id!: number;
    t_name!: string;
}
