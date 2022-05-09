import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "posts" })
export class Posts {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title" })
  title: string;

  @Column("varchar", { name: "subTitle" })
  subTitle: string;

  @Column("longtext", { name: "contents" })
  contents: string;

  @Column("varchar", { name: "slug" })
  slug: string;

  @Column("boolean", { name: "isUse", default: true })
  isUse: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
