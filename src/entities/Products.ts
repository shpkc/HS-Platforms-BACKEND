import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "products" })
export class Products {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title" })
  name: string;

  @Column("varchar", { name: "subTitle" })
  subTitle: string;

  @Column("varchar", { name: "description" })
  description: string;

  @Column("varchar", { name: "category", default: "" })
  category: string;

  @Column("float", { name: "score", default: 0.0 })
  score: number;

  @Column("varchar", { name: "keywords", default: "" })
  keywords: string;

  @Column("varchar", { name: "companyName", default: "" })
  companyName: string;

  @Column("varchar", { name: "companyCeoName", default: "" })
  companyCeoName: string;

  @Column("varchar", { name: "homepage", default: "" })
  homepage: string;

  @Column("varchar", { name: "appStoreLink", default: "" })
  appStoreLink: string;

  @Column("varchar", { name: "playStoreLink", default: "" })
  playStoreLink: string;

  @Column("varchar", { name: "releaseDate", default: "" })
  releaseDate: string;

  @Column("boolean", { name: "isNew", default: false })
  isNew: boolean;

  @Column("boolean", { name: "isUse", default: true })
  isUse: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
