"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const user_repo_1 = require("./user.repo");
const mongoose_1 = require("@nestjs/mongoose");
const axios_1 = require("@nestjs/axios");
const user_model_1 = require("../../model/user.model");
const jobRole_model_1 = require("../../model/jobRole.model");
const role_model_1 = require("../../model/role.model");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            mongoose_1.MongooseModule.forFeature([
                { name: user_model_1.User.name, schema: user_model_1.UserSchema },
                { name: jobRole_model_1.JobRole.name, schema: jobRole_model_1.JobRoleSchema },
                { name: role_model_1.Role.name, schema: role_model_1.RoleSchema },
            ]),
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, user_repo_1.UserRepo],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map