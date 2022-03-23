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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NftsController = void 0;
const common_1 = require("@nestjs/common");
const nft_service_1 = require("./nft.service");
let NftsController = class NftsController {
    constructor(nftsService) {
        this.nftsService = nftsService;
    }
    async getNfts(page, perPage) {
        return this.nftsService.getNfts(page, perPage);
    }
    async getAllGamesId() {
        return this.nftsService.getAllNftsId();
    }
    async getNftsMain() {
        return this.nftsService.getNftsMain();
    }
    async getNftsDetail(id) {
        return this.nftsService.getNftsDetail(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("page", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)("perPage", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], NftsController.prototype, "getNfts", null);
__decorate([
    (0, common_1.Get)("/all-id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NftsController.prototype, "getAllGamesId", null);
__decorate([
    (0, common_1.Get)("/main"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NftsController.prototype, "getNftsMain", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NftsController.prototype, "getNftsDetail", null);
NftsController = __decorate([
    (0, common_1.Controller)("nfts"),
    __metadata("design:paramtypes", [nft_service_1.NftsService])
], NftsController);
exports.NftsController = NftsController;
//# sourceMappingURL=nft.controller.js.map