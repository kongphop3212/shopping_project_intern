import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Order } from "./Orders";

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  c_id: number;

  @Column()
  c_name: string;

  @Column()
  c_tel: string;

  @Column()
  c_country: string;

  @Column()
  c_address: string;

  @Column()
  c_city: string;

  @Column()
  c_province: string;

  @Column()
  c_postalcode: string;

  // @OneToMany(() => Order, order => order.customer)
  // orders: Order[];
}
