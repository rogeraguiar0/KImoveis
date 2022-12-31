import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("adresses")
export class Adresses {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  district: string;

  @Column({ length: 9 })
  zipCode: string;

  @Column({ length: 10, nullable: true })
  number: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 2 })
  state: string;
}
