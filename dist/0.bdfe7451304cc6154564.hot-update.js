"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 17:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dotenv_1 = __importDefault(__webpack_require__(18));
const Games_1 = __webpack_require__(19);
const Nfts_1 = __webpack_require__(21);
const Users_1 = __webpack_require__(22);
const Collections_1 = __webpack_require__(48);
dotenv_1.default.config();
const config = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Users_1.Users, Games_1.Games, Nfts_1.Nfts, Collections_1.Collections],
    migrations: [__dirname + "/src/migrations/*.ts"],
    cli: { migrationsDir: "src/migrations" },
    autoLoadEntities: true,
    charset: "utf8mb4",
    synchronize: false,
    logging: true,
    keepConnectionAlive: true,
};
module.exports = config;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("91ce9168ee25392d897e")
/******/ })();
/******/ 
/******/ }
;