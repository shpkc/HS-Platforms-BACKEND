import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Movies } from "./Movies";

@Entity({ schema: "sleact", name: "actors" })
export class Actors {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name" })
  name: string;

  @Column("varchar", { name: "profileImage" })
  profileImage: string;

  @Column("varchar", { name: "sex" })
  sex: string;

  @ManyToMany(() => Movies, (movies) => movies.castings)
  @JoinTable({
    name: "movieActors",
    joinColumn: {
      name: "UserId",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "MovieId",
      referencedColumnName: "id",
    },
  })
  Movies: Movies[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
