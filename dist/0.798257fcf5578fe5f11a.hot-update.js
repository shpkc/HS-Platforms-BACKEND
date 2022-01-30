"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(5);
const passport_1 = __importDefault(__webpack_require__(6));
const cookie_parser_1 = __importDefault(__webpack_require__(7));
const express_session_1 = __importDefault(__webpack_require__(8));
const path_1 = __importDefault(__webpack_require__(9));
const common_1 = __webpack_require__(10);
const app_module_1 = __webpack_require__(11);
const http_exception_filter_1 = __webpack_require__(24);
const fs = __webpack_require__(25);
async function bootstrap() {
    const httpsOptions = {
        key: fs.readFileSync("./privkey.pem"),
        cert: fs.readFileSync("./fullchain.pem"),
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        httpsOptions,
    });
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    app.enableCors({
        origin: true,
        credentials: true,
    });
    app.useStaticAssets(process.env.NODE_ENV === "production"
        ? path_1.default.join(__dirname, "..", "..", "uploads")
        : path_1.default.join(__dirname, "..", "uploads"), {
        prefix: "/uploads",
    });
    app.useStaticAssets(process.env.NODE_ENV === "production"
        ? path_1.default.join(__dirname, "..", "..", "public")
        : path_1.default.join(__dirname, "..", "public"), {
        prefix: "/dist",
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Sleact API")
        .setDescription("Sleact 개발을 위한 API 문서입니다.")
        .setVersion("1.0")
        .addCookieAuth("connect.sid")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    app.use((0, cookie_parser_1.default)());
    app.use((0, express_session_1.default)({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true,
        },
    }));
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    const PORT = process.env.PORT || 3095;
    await app.listen(PORT);
    console.log(`server listening on port ${PORT}`);
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2c93a51ae244fd7d72ed")
/******/ })();
/******/ 
/******/ }
;