import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Index("name", ["name"], { unique: true })
@Entity({ schema: "sleact", name: "courts" })
export class Courts {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", unique: true, length: 30 })
  name: string;

  @Column("varchar", { name: "contents" })
  contents: string;

  @Column("varchar", { name: "title" })
  title: string;

  @Column("varchar", { name: "title2" })
  title2: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
