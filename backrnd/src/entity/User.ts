import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Customer } from "./Customer";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  u_id: number;

  @Column()
  u_email: string;

  @Column()
  u_password: string;

  @Column()
  u_name: string;

  // @OneToOne(() => Customer)
  // @JoinColumn({ name: "c_id" })
  // customer: Customer;
}
