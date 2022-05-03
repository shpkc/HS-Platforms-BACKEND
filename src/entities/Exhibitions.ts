import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "exhibitions" })
export class Exhibitions {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title" })
  title: string;

  @Column("varchar", { name: "description", default: "" })
  description: string;

  @Column("varchar", { name: "category", default: "" })
  category: string;

  @Column("varchar", { name: "location", default: "" })
  location: string;

  @Column("float", { name: "reviewScore", default: 0.0 })
  reviewScore: number;

  @Column("int", { name: "reviewParticipants", default: 1 })
  reviewParticipants: number;

  @Column("varchar", { name: "keywords", default: "" })
  keywords: string;

  @Column("boolean", { name: "isSeoul", default: true })
  isSeoul: boolean;

  @Column("boolean", { name: "isOngoing", default: true })
  isOngoing: boolean;

  @Column("boolean", { name: "isUse", default: true })
  isUse: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
