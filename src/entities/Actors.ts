import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { MovieActors } from "./MovieActors";
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

  @OneToMany(() => MovieActors, (movieActors) => movieActors.Actor)
  MovieActors: MovieActors[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => Movies, (movies) => movies.MovieActors)
  @JoinTable({
    name: "movieactors",
    joinColumn: {
      name: "ActorId",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "MovieId",
      referencedColumnName: "id",
    },
  })
  Movies: Movies[];
}
