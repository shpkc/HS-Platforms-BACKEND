import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Index("name", ["name"])
@Entity({ name: "courts" })
export class Courts {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 30 })
  name: string;

  @Column("varchar", { name: "introduction" })
  introduction: string;

  @Column("varchar", { name: "city" })
  city: string;

  @Column("varchar", { name: "address" })
  address: string;

  @Column("varchar", { name: "phone" })
  phone: string;

  @Column("float", { name: "lat", default: 0 })
  lat: number;

  @Column("float", { name: "lng", default: 0 })
  lng: number;

  @Column("int", { name: "imgLength", default: 0 })
  imgLength: number;

  @Column("varchar", { name: "reservation" })
  reservation: string;

  @Column("varchar", { name: "reservationLink", default: "" })
  reservationLink: string;

  @Column("varchar", { name: "courtType" })
  courtType: string;

  @Column("varchar", { name: "numberOfCourts" })
  numberOfCourts: string;

  @Column("varchar", { name: "keywords", default: "" })
  keywords: string;

  @Column("boolean", { name: "isOnlineReservation", default: true })
  isOnlineReservation: boolean;

  @Column("boolean", { name: "isParking", default: true })
  isParking: boolean;

  @Column("boolean", { name: "isIndoor", default: true })
  isIndoor: boolean;

  @Column("boolean", { name: "isOutDoor", default: true })
  isOutDoor: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
