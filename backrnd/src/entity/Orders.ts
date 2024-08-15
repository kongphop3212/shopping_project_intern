import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Customer } from "./Customer";
import { Product } from "./Product";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  o_id: number;

  @Column()
  o_date: Date;

  // @ManyToOne(() => Customer, customer => customer.orders)
  // customer: Customer;

  // @ManyToOne(() => Product)
  // product: Product;
}