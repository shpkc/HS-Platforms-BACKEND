"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 28:
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Games = void 0;
const typeorm_1 = __webpack_require__(20);
let Games = class Games {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Games.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "title" }),
    __metadata("design:type", String)
], Games.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "description" }),
    __metadata("design:type", String)
], Games.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "genre" }),
    __metadata("design:type", String)
], Games.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "developer" }),
    __metadata("design:type", String)
], Games.prototype, "developer", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "currency" }),
    __metadata("design:type", String)
], Games.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "release" }),
    __metadata("design:type", String)
], Games.prototype, "release", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Games.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Games.prototype, "updatedAt", void 0);
Games = __decorate([
    (0, typeorm_1.Index)("name", ["name"]),
    (0, typeorm_1.Entity)({ name: "games" })
], Games);
exports.Games = Games;


/***/ }),

/***/ 24:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CourtsModule = void 0;
const common_1 = __webpack_require__(10);
const games_service_1 = __webpack_require__(25);
const games_controller_1 = __webpack_require__(26);
const typeorm_1 = __webpack_require__(12);
const Games_1 = __webpack_require__(28);
let CourtsModule = class CourtsModule {
};
CourtsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Games_1.Games])],
        providers: [games_service_1.GamesService],
        controllers: [games_controller_1.GamesController],
    })
], CourtsModule);
exports.CourtsModule = CourtsModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fa9ab613714276eb0c86")
/******/ })();
/******/ 
/******/ }
;