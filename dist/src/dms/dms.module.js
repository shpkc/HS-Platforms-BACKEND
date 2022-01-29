"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DMsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const DMs_1 = require("../entities/DMs");
const Users_1 = require("../entities/Users");
const Workspaces_1 = require("../entities/Workspaces");
const dms_controller_1 = require("./dms.controller");
const dms_service_1 = require("./dms.service");
const events_module_1 = require("../events/events.module");
let DMsModule = class DMsModule {
};
DMsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([DMs_1.DMs, Users_1.Users, Workspaces_1.Workspaces]), events_module_1.EventsModule],
        controllers: [dms_controller_1.DMsController],
        providers: [dms_service_1.DMsService],
    })
], DMsModule);
exports.DMsModule = DMsModule;
//# sourceMappingURL=dms.module.js.map