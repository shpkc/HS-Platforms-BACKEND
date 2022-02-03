"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Courts_1 = require("../entities/Courts");
let CourtsService = class CourtsService {
    async getCourts(page, perPage) {
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
    async getCourtsDetail(id) {
        const result = await this.courtsRepository.findOne({
            where: {
                id: id,
            },
        });
        return {
            data: result,
        };
    }
    async createCourts(name, introduction, city, address, phone, lat, lng, imgLength, reservation, reservationLink, numberOfCourts, isOnlineReservation, isParking, isIndoor, isOutDoor, courtType) {
        const court = new Courts_1.Courts();
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
};
__decorate([
    (0, typeorm_1.InjectRepository)(Courts_1.Courts),
    __metadata("design:type", typeorm_2.Repository)
], CourtsService.prototype, "courtsRepository", void 0);
CourtsService = __decorate([
    (0, common_1.Injectable)()
], CourtsService);
exports.CourtsService = CourtsService;
//# sourceMappingURL=courts.service.js.map