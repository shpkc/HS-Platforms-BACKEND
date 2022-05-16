import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Courts } from "../entities/Courts";
import { Banners } from "../entities/Banner";
import axios from "axios";

@Injectable()
export class CourtsService {
  @InjectRepository(Courts)
  private courtsRepository: Repository<Courts>;
  @InjectRepository(Banners)
  private bannersRepository: Repository<Banners>;

  async getCourts(page: number, perPage: number) {
    const [result, total] = await this.courtsRepository
      .createQueryBuilder("courts")
      .take(perPage)
      .skip(perPage * (page - 1))
      .getManyAndCount();

    return {
      result,
      totalCount: total,
    };
  }

  // NOTE : main API (banner, best courts)
  async getMain() {
    axios({
      url: "https://hooks.slack.com/services/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",
      method: "POST",
      data: {
        text: "test",
      },
    });
    const bannerIdList = ["1", "2", "3", "4"];
    const bannerResult = await this.bannersRepository
      .createQueryBuilder("banners")
      .where("banners.id IN (:...ids)", { ids: bannerIdList })
      .getMany();

    // NOTE : BEST courts 8개
    const bestCourtsIdList = ["1", "2", "3", "4", "6", "10", "13", "14"];
    const bestResult = await this.courtsRepository
      .createQueryBuilder("courts")
      .where("courts.id IN (:...ids)", { ids: bestCourtsIdList })
      .getMany();

    return {
      banner: bannerResult,
      bestCourts: bestResult,
    };
  }

  async getCourtsDetail(id: number) {
    const result = await this.courtsRepository.findOne({
      where: {
        id: id,
      },
    });
    return {
      result,
    };
  }

  async getAllCourtsId() {
    const [result] = await this.courtsRepository
      .createQueryBuilder("courts")
      .select(["courts.id"])
      .getManyAndCount();
    return {
      result,
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
