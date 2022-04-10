import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "products" })
export class Products {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title" })
  title: string;

  @Column("varchar", { name: "subTitle" })
  subTitle: string;

  @Column("varchar", { name: "description" })
  description: string;

  @Column("varchar", { name: "category", default: "" })
  category: string;

  @Column("float", { name: "reviewScore", default: 0.0 })
  reviewScore: number;

  @Column("int", { name: "reviewParticipants", default: 1 })
  reviewParticipants: number;

  @Column("varchar", { name: "keywords", default: "" })
  keywords: string;

  @Column("varchar", { name: "companyName", default: "" })
  companyName: string;

  @Column("varchar", { name: "companyCeoName", default: "" })
  companyCeoName: string;

  @Column("varchar", { name: "homepage", default: "" })
  homepage: string;

  @Column("boolean", { name: "isAppStore", default: true })
  isAppStore: boolean;

  @Column("varchar", { name: "appStoreLink", default: "" })
  appStoreLink: string;

  @Column("boolean", { name: "isPlayStore", default: true })
  isPlayStore: boolean;

  @Column("varchar", { name: "playStoreLink", default: "" })
  playStoreLink: string;

  @Column("boolean", { name: "isWebService", default: true })
  isWebService: boolean;

  @Column("varchar", { name: "webServiceLink", default: "" })
  webServiceLink: string;

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
