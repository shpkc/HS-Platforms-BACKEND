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

  @Column("boolean", { name: "isUse", default: true })
  isUse: boolean;

  @Column("varchar", { name: "title" })
  title: string;

  @Column("varchar", { name: "description" })
  description: string;

  @Column("varchar", { name: "genre" })
  genre: string;

  @Column("float", { name: "score", default: 0.0 })
  score: number;

  @Column("int", { name: "participantsCount", default: 0 })
  participantsCount: number;

  @Column("varchar", { name: "developer" })
  developer: string;

  @Column("varchar", { name: "currency", default: "" })
  currency: string;

  @Column("varchar", { name: "website", default: "" })
  website: string;

  @Column("boolean", { name: "isReleased", default: true })
  isReleased: boolean;

  @Column("boolean", { name: "isWindow", default: true })
  isWindow: boolean;

  @Column("boolean", { name: "isApple", default: false })
  isApple: boolean;

  @Column("boolean", { name: "isGoogle", default: false })
  isGoogle: boolean;

  @Column("boolean", { name: "isSteam", default: false })
  isSteam: boolean;

  @Column("boolean", { name: "isNFT", default: false })
  isNFT: boolean;

  @Column("varchar", { name: "releaseDate", default: "" })
  releaseDate: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
