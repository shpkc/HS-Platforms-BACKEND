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
const posts_repository_1 = require("../posts.repository");
let PostsService = class PostsService {
    constructor(postsRepository) {
        this.postsRepository = postsRepository;
    }
    async getAllPost() {
        const allpost = await this.postsRepository.findAll();
        const readOnlyPosts = allpost.map((post) => post.readOnlyData);
        return readOnlyPosts;
    }
    async addPost(body) {
        const { title, content } = body;
        const post = await this.postsRepository.create({
            title,
            content,
        });
        return post.readOnlyData;
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [posts_repository_1.PostsRepository])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map