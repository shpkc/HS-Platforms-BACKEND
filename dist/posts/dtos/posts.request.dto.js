"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const posts_schema_1 = require("../posts.schema");
class CatRequestDto extends (0, swagger_1.PickType)(posts_schema_1.Post, [
    "email",
    "name",
    "password",
]) {
}
exports.CatRequestDto = CatRequestDto;
//# sourceMappingURL=posts.request.dto.js.map