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
        example: "title of post",
        description: "title",
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "content of post",
        description: "content",
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Post.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "category of post",
        description: "category",
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Post.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "tag of post",
        description: "tag",
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Post.prototype, "tag", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "user of post",
        description: "tag",
        required: true,
    }),
    (0, mongoose_1.Prop)({
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Post.prototype, "participants", void 0);
Post = __decorate([
    (0, mongoose_1.Schema)(options)
], Post);
exports.Post = Post;
const _PostSchema = mongoose_1.SchemaFactory.createForClass(Post);
_PostSchema.virtual("readOnlyData").get(function () {
    return {
        title: this.title,
        content: this.content,
        category: this.category,
        tag: this.tag,
    };
});
_PostSchema.set("toObject", { virtuals: true });
_PostSchema.set("toJSON", { virtuals: true });
exports.PostSchema = _PostSchema;
//# sourceMappingURL=posts.schema.js.map