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
exports.PostsRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const posts_schema_1 = require("./posts.schema");
let PostsRepository = class PostsRepository {
    constructor(postModel) {
        this.postModel = postModel;
    }
    async findAll() {
        const result = await this.postModel.find();
        return result;
    }
    async findByIdAndUpdateImg(id, fileName) {
        const cat = await this.postModel.findById(id);
        cat.imgUrl = `http://localhost:8000/media/${fileName}`;
        const newCat = await cat.save();
        console.log(newCat);
        return newCat.readOnlyData;
    }
    async findCatByIdWithoutPassword(catId) {
        const cat = await this.postModel.findById(catId).select("-password");
        return cat;
    }
    async findCatByEmail(email) {
        const cat = await this.postModel.findOne({ email });
        return cat;
    }
    async existsByEmail(email) {
        const result = await this.postModel.exists({ email });
        return result;
    }
    async create(cat) {
        return await this.postModel.create(cat);
    }
};
PostsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(posts_schema_1.Post.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PostsRepository);
exports.PostsRepository = PostsRepository;
//# sourceMappingURL=posts.repository.js.map