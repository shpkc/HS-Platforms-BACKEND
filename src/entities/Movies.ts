import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Actors } from "./Actors";

@Entity({ schema: "sleact", name: "movies" })
export class Movies {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title" })
  title: string;

  @Column("varchar", { name: "subTitle" })
  subTitle: string;

  @Column("varchar", { name: "thumbnail" })
  thumbnail: string;

  @Column("varchar", { name: "contents" })
  contents: string;

  @OneToMany(() => Actors, (actors) => actors.Movies, {
    cascade: ["insert"],
  })
  castings: Actors[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
