import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { ProductType } from './ProductType';

export enum Size {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  p_id!: number;

  @Column()
  p_name!: string;

  @Column()
  p_img!: string;

  @Column()
  p_descript!: string;

  @Column()
  p_size!: Size; 

  @Column({ default: 0 })
  p_price!: number;

  @Column()
  p_quantity!: number;

  @ManyToOne(() => ProductType)
  @JoinColumn({ name: 't_id' })
  productType?: ProductType;

}