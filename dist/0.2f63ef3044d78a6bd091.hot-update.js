"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 23:
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
exports.CourtsController = void 0;
const common_1 = __webpack_require__(10);
const courts_service_1 = __webpack_require__(22);
let CourtsController = class CourtsController {
    constructor(courtsService) {
        this.courtsService = courtsService;
    }
    async getCourts(page, perPage) {
        return this.courtsService.getCourts(page, perPage);
    }
    async getAllCourtsId() {
        return this.courtsService.getAllCourtsId();
    }
    async getCourtsDetail(id) {
        return this.courtsService.getCourtsDetail(id);
    }
    async createCourts(body) {
        return this.courtsService.createCourts(body.name, body.introduction, body.city, body.address, body.phone, body.imgLength, body.lat, body.lng, body.reservation, body.reservationLink, body.numberOfCourts, body.isOnlineReservation, body.Parking, body.isIndoor, body.isOutDoor, body.courtType);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("page", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)("perPage", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CourtsController.prototype, "getCourts", null);
__decorate([
    (0, common_1.Get)("/all-id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CourtsController.prototype, "getAllCourtsId", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CourtsController.prototype, "getCourtsDetail", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CourtsController.prototype, "createCourts", null);
CourtsController = __decorate([
    (0, common_1.Controller)("courts"),
    __metadata("design:paramtypes", [typeof (_a = typeof courts_service_1.CourtsService !== "undefined" && courts_service_1.CourtsService) === "function" ? _a : Object])
], CourtsController);
exports.CourtsController = CourtsController;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0da387e1455f00b7c909")
/******/ })();
/******/ 
/******/ }
;