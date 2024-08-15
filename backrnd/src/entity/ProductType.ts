import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ProductType {
  @PrimaryGeneratedColumn()
  t_id!: number;

  @Column()
  t_name!: string;
}