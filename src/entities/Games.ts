import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Index("title", ["title"])
@Entity({ name: "games" })
export class Games {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title" })
  title: string;

  @Column("varchar", { name: "description" })
  description: string;

  @Column("varchar", { name: "genre" })
  genre: string;

  @Column("varchar", { name: "developer" })
  developer: string;

  @Column("varchar", { name: "currency" })
  currency: string;

  @Column("varchar", { name: "website", default: "" })
  website: string;

  @Column("boolean", { name: "isReleased", default: true })
  isReleased: boolean;

  @Column("varchar", { name: "releaseDate", default: "" })
  releaseDate: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
