"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const posts_schema_1 = require("../posts.schema");
class PostRequestDto extends (0, swagger_1.PickType)(posts_schema_1.Post, [
    "email",
    "name",
    "password",
]) {
}
exports.PostRequestDto = PostRequestDto;
//# sourceMappingURL=posts.request.dto.js.map