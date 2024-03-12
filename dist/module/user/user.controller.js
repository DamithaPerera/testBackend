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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const signup_dto_1 = require("./dto/signup.dto");
const login_dto_1 = require("./dto/login.dto");
const changePassword_dto_1 = require("./dto/changePassword.dto");
const forgotPassword_dto_1 = require("./dto/forgotPassword.dto");
const ssoLogin_dto_1 = require("./dto/ssoLogin.dto");
const response_dto_1 = require("../../common/helpers/responses/response-dto");
const messages_1 = require("../../common/constant/messages");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async signUp(signupDtoDto) {
        await this.userService.signUp(signupDtoDto);
        return new response_dto_1.SuccessDto(messages_1.SUCCESS_MESSAGES.USER_CREATED, null);
    }
    async login(loginDtoDto) {
        const data = await this.userService.login(loginDtoDto);
        return new response_dto_1.SuccessDto(messages_1.SUCCESS_MESSAGES.USER_LOGIN, data);
    }
    async ssoLogin(ssoLoginDto) {
        const data = await this.userService.ssoLoginService(ssoLoginDto);
        return new response_dto_1.SuccessDto(messages_1.SUCCESS_MESSAGES.USER_LOGIN, data);
    }
    async changePassword(changePasswordDto) {
        await this.userService.changePassword(changePasswordDto);
        return new response_dto_1.SuccessDto(messages_1.SUCCESS_MESSAGES.PASSWORD_CHANGED, null);
    }
    async forgotPassword(forgotPasswordDto) {
        await this.userService.forgotPassword(forgotPasswordDto);
        return new response_dto_1.SuccessDto(messages_1.SUCCESS_MESSAGES.PASSWORD_CHANGED, null);
    }
    async createRole() {
        const data = await this.userService.createRole();
        return new response_dto_1.SuccessDto(messages_1.SUCCESS_MESSAGES.USER_LOGIN, data);
    }
};
__decorate([
    (0, common_1.Post)('/signup'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED.valueOf()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_dto_1.SignupDtoDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('/login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK.valueOf()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDtoDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('/sso'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK.valueOf()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ssoLogin_dto_1.SsoLoginDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "ssoLogin", null);
__decorate([
    (0, common_1.Post)('/change-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK.valueOf()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [changePassword_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Post)('/forgot-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK.valueOf()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgotPassword_dto_1.ForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('/createRole'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK.valueOf()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createRole", null);
UserController = __decorate([
    (0, common_1.Controller)('v1/user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map