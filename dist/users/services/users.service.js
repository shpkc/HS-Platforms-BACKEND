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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const users_repository_1 = require("../users.repository");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async getAllUser() {
        const allUser = await this.usersRepository.findAll();
        const readOnlyUsers = allUser.map((user) => user.readOnlyData);
        return readOnlyUsers;
    }
    async signUp(body) {
        const { email, nickname, password } = body;
        const isUserExist = await this.usersRepository.existsByEmail(email);
        if (isUserExist) {
            throw new common_1.UnauthorizedException("해당하는 유저는 이미 존재합니다.");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const cat = await this.usersRepository.create({
            email,
            nickname,
            password: hashedPassword,
        });
        return cat.readOnlyData;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map