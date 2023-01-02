import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Timestamp,
} from "typeorm";
import { Properties } from "./properties.entity";
import { User } from "./user.entity";

@Entity("schedules_user_properties")
export class Schedules {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => User, (user) => user.schedule)
  user: User;

  @ManyToOne(() => Properties, (property) => property.schedule)
  properties: Properties;
}
