import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Adresses } from "./adresses.entity";
import { Categories } from "./categories.entity";
import { Schedules } from "./schedules_user_properties.entity";

@Entity("properties")
export class Properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Schedules, (schedule) => schedule.property)
  schedule: Schedules;

  @OneToOne(() => Adresses)
  @JoinColumn()
  adress: Adresses;

  @ManyToOne(() => Categories, (category) => category.id)
  category: Categories;
}
