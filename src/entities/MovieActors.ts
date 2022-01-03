import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  UpdateDateColumn,
} from "typeorm";
import { Actors } from "./Actors";
import { Movies } from "./Movies";

@Index("ActorId", ["ActorId"], {})
@Entity({ schema: "sleact", name: "movieactors" })
export class MovieActors {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column("int", { primary: true, name: "MovieId" })
  MovieId: number;

  @Column("int", { primary: true, name: "ActorId" })
  ActorId: number;

  @ManyToOne(() => Movies, (movies) => movies.MovieActors, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "MovieId", referencedColumnName: "id" }])
  Movie: Movies;

  @ManyToOne(() => Actors, (actors) => actors.MovieActors, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "ActorId", referencedColumnName: "id" }])
  Actor: Actors;
}
