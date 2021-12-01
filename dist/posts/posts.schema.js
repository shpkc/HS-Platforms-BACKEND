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
exports.PostSchema = exports.Post = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
const swagger_1 = require("@nestjs/swagger");
const options = {
    timestamps: true,
};
let Post = class Post extends mongoose_2.Document {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "amamov@kakao.com",
        description: "email",
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
        unique: true,
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Post.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "amamov",
        description: "name",
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Post.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "23810",
        description: "password",
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Post.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: "https://github.com/amamov/NestJS-solid-restapi-boilerplate/raw/main/docs/images/1.jpeg",
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Post.prototype, "imgUrl", void 0);
Post = __decorate([
    (0, mongoose_1.Schema)(options)
], Post);
exports.Post = Post;
const _PostSchema = mongoose_1.SchemaFactory.createForClass(Post);
_PostSchema.virtual("readOnlyData").get(function () {
    return {
        id: this.id,
        email: this.email,
        name: this.name,
        imgUrl: this.imgUrl,
    };
});
_PostSchema.set("toObject", { virtuals: true });
_PostSchema.set("toJSON", { virtuals: true });
exports.PostSchema = _PostSchema;
//# sourceMappingURL=posts.schema.js.map