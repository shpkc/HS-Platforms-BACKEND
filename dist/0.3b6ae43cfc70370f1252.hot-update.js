"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 26:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GamesController = void 0;
const common_1 = __webpack_require__(10);
const games_service_1 = __webpack_require__(25);
let GamesController = class GamesController {
    constructor(gamesService) {
        this.gamesService = gamesService;
    }
    async getGames(page, perPage) {
        return this.gamesService.getGames(page, perPage);
    }
    async getAllGamesId() {
        return this.gamesService.getAllGamesId();
    }
    async getGamesDetail(id) {
        return this.gamesService.getGamesDetail(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("page", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)("perPage", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], GamesController.prototype, "getGames", null);
__decorate([
    (0, common_1.Get)("/all-id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GamesController.prototype, "getAllGamesId", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GamesController.prototype, "getGamesDetail", null);
GamesController = __decorate([
    (0, common_1.Controller)("games"),
    __metadata("design:paramtypes", [typeof (_a = typeof games_service_1.GamesService !== "undefined" && games_service_1.GamesService) === "function" ? _a : Object])
], GamesController);
exports.GamesController = GamesController;


/***/ }),

/***/ 25:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CourtsService = void 0;
const common_1 = __webpack_require__(10);
const typeorm_1 = __webpack_require__(12);
const typeorm_2 = __webpack_require__(20);
const Courts_1 = __webpack_require__(19);
let CourtsService = class CourtsService {
    async getCourts(page, perPage) {
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
    async getCourtsDetail(id) {
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
        const [result, total] = await this.courtsRepository
            .createQueryBuilder("courts")
            .select(["courts.id"])
            .getManyAndCount();
        console.log(result);
        return {
            result,
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
    __metadata("design:type", typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object)
], CourtsService.prototype, "courtsRepository", void 0);
CourtsService = __decorate([
    (0, common_1.Injectable)()
], CourtsService);
exports.CourtsService = CourtsService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e26487fd367c9924458f")
/******/ })();
/******/ 
/******/ }
;