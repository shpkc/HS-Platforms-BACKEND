import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "nfts" })
export class Nfts {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title" })
  title: string;

  @Column("varchar", { name: "description" })
  description: string;

  @Column("varchar", { name: "currency", default: "ETH" })
  currency: string;

  @Column("float", { name: "price", default: 1.0 })
  price: number;

  @Column("varchar", { name: "mediaType", default: "IMAGE" })
  mediaType: string;

  @Column("varchar", { name: "image", default: "" })
  image: string;

  @Column("varchar", { name: "owner", default: "" })
  owner: string;

  @Column("varchar", { name: "seller", default: "" })
  seller: string;

  @Column("boolean", { name: "isSold", default: false })
  isSold: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
