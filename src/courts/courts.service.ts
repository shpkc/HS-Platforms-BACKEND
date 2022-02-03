import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Courts } from "../entities/Courts";

@Injectable()
export class CourtsService {
  @InjectRepository(Courts)
  private courtsRepository: Repository<Courts>;

  async getCourts(page: number, perPage: number) {
    const [result, total] = await this.courtsRepository
      .createQueryBuilder("courts")
      .take(perPage)
      .skip(perPage * (page - 1))
      .getManyAndCount();

    return {
      data: result,
      totalCount: total,
    };
  }

  async getCourtsDetail(id: number) {
    const result = await this.courtsRepository.findOne({
      where: {
        id: id,
      },
    });
    return {
      data: result,
    };
  }

  async createCourts(
    name: string,
    introduction: string,
    city: string,
    address: string,
    phone: string,
    lat: number,
    lng: number,
    imgLength: number,
    reservation: string,
    reservationLink: string,
    numberOfCourts: string,
    isOnlineReservation: boolean,
    isParking: boolean,
    isIndoor: boolean,
    isOutDoor: boolean,
    courtType: string
  ) {
    const court = new Courts();

    court.name = name;
    court.introduction = introduction;
    court.city = city;
    court.address = address;
    court.phone = phone;
    court.lat = lat;
    court.lng = lng;
    court.imgLength = imgLength;
    court.reservation = reservation;
    court.reservationLink = reservationLink;
    court.numberOfCourts = numberOfCourts;
    court.isOnlineReservation = isOnlineReservation;
    court.isParking = isParking;
    court.isIndoor = isIndoor;
    court.isOutDoor = isOutDoor;
    court.courtType = courtType;

    await this.courtsRepository.save(court);
  }
}
