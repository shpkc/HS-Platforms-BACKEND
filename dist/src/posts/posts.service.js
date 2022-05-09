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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Posts_1 = require("../entities/Posts");
let PostsService = class PostsService {
    async getPosts(page, perPage) {
        const [result, total] = await this.postsRepository
            .createQueryBuilder("posts")
            .where("posts.isUse = true")
            .take(perPage)
            .skip(perPage * (page - 1))
            .getManyAndCount();
        return {
            result,
            totalCount: total,
        };
    }
    async getPostsDetail(slug) {
        const result = await this.postsRepository.findOne({
            where: {
                slug,
            },
        });
        return {
            result,
        };
    }
    async getAllPostsId() {
        const result = await this.postsRepository
            .createQueryBuilder("posts")
            .where("posts.isUse = true")
            .select(["posts.id"])
            .getMany();
        return {
            result,
        };
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(Posts_1.Posts),
    __metadata("design:type", typeorm_2.Repository)
], PostsService.prototype, "postsRepository", void 0);
PostsService = __decorate([
    (0, common_1.Injectable)()
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map