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
exports.UserRepo = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const user_model_1 = require("../../model/user.model");
const role_model_1 = require("../../model/role.model");
const roles_enum_1 = require("../../common/enums/roles.enum");
let UserRepo = class UserRepo {
    constructor(userModel, roleModel) {
        this.userModel = userModel;
        this.roleModel = roleModel;
        this.findUserByEmail = async (email) => {
            return this.userModel
                .findOne({ email: { $regex: email, $options: 'i' } })
                .populate({
                path: 'roleId',
                model: 'Role',
                select: 'name id',
                foreignField: 'id',
            })
                .lean();
        };
        this.createNewUser = async (data) => {
            return this.userModel.create(data);
        };
        this.findOneByEmailAndUpdate = async (email, token) => {
            return this.userModel
                .findOneAndUpdate({
                email: email,
            }, { accessToken: token })
                .setOptions({ new: true })
                .lean();
        };
        this.updatePassword = async (changePasswordDto) => {
            return this.userModel.findOneAndUpdate({ email: changePasswordDto.email }, { password: changePasswordDto.newPassword });
        };
        this.forgotPassword = async (forgotPasswordDto) => {
            return this.userModel.findOneAndUpdate({ email: forgotPasswordDto.email }, { password: forgotPasswordDto.newPassword });
        };
        this.createRole = async () => {
            return this.roleModel.create({
                name: roles_enum_1.RolesEnum.HIRING_MANAGER,
            });
        };
        this.userModel = userModel;
        this.roleModel = roleModel;
    }
};
UserRepo = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_model_1.User.name)),
    __param(1, (0, mongoose_2.InjectModel)(role_model_1.Role.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], UserRepo);
exports.UserRepo = UserRepo;
//# sourceMappingURL=user.repo.js.map