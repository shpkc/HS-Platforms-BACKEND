"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const cats_module_1 = require("./cats/cats.module");
const logger_middleware_1 = require("./common/middlewares/logger.middleware");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const comments_module_1 = require("./comments/comments.module");
const posts_module_1 = require("./posts/posts.module");
let AppModule = class AppModule {
    constructor() {
        this.isDev = process.env.MODE === "dev" ? true : false;
    }
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes("*");
        mongoose.set("debug", this.isDev);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }),
            comments_module_1.CommentsModule,
            cats_module_1.CatsModule,
            auth_module_1.AuthModule,
            posts_module_1.PostsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map