import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from "typeorm";

import { hashSync, getRounds } from "bcryptjs";
import { Schedules } from "./schedules_user_properties.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column()
  isAdm: boolean;

  @Column({ default: true })
  isActive: boolean;

  @Column({ length: 50 })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Schedules, (schedule) => schedule.id)
  schedule: Schedules;

  @BeforeUpdate()
  @BeforeInsert()
  updatePassword() {
    const isEncrypted = getRounds(this.password);

    if (!isEncrypted) this.password = hashSync(this.password, 10);
  }
}
