"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repo_1 = require("./user.repo");
const bcrypt = __importStar(require("bcrypt"));
const jsonwebtoken_1 = require("jsonwebtoken");
const response_dto_1 = require("../../common/helpers/responses/response-dto");
const messages_1 = require("../../common/constant/messages");
const constant_1 = require("../../common/constant/constant");
let UserService = class UserService {
    constructor(userRepo) {
        this.userRepo = userRepo;
        this.encryptPassword = async (password) => {
            const salt = await bcrypt.genSalt();
            return bcrypt.hash(password, salt);
        };
        this.addTokensToUser = async (user) => {
            const token = this.getJwt(user.email, user.roles, user.id);
            return this.userRepo.findOneByEmailAndUpdate(user.email, token);
        };
        this.getJwt = (email, role, id) => {
            const data = {
                email: email,
                roles: role,
                id: id,
            };
            return (0, jsonwebtoken_1.sign)(data, constant_1.STATIC_VALUES.jwtSecret, {
                expiresIn: constant_1.STATIC_VALUES.jwtExpirationMs,
            });
        };
        this.checkIfPasswordIsValid = async (password, passwordInDb) => {
            const isValid = await this.comparePasswords(password, passwordInDb);
            if (!isValid) {
                throw new common_1.BadRequestException(new response_dto_1.ErrorDto(messages_1.ERROR_MESSAGES.INVALID_CREDENTIALS, null));
            }
        };
        this.comparePasswords = (password, hashedPassword) => bcrypt.compare(password, hashedPassword);
        this.userRepo = userRepo;
    }
    async signUp(signupDtoDto) {
        const email = await this.userRepo.findUserByEmail(signupDtoDto.email);
        if (email) {
            throw new common_1.BadRequestException(new response_dto_1.ErrorDto(messages_1.ERROR_MESSAGES.EMAIL_ALREADY_EXISTS, null));
        }
        signupDtoDto.password = await this.encryptPassword(signupDtoDto.password);
        return this.userRepo.createNewUser(signupDtoDto);
    }
    async login(loginDtoDto) {
        const data = await this.userRepo.findUserByEmail(loginDtoDto.email);
        if (!data) {
            throw new common_1.BadRequestException(new response_dto_1.ErrorDto(messages_1.ERROR_MESSAGES.EMAIL_ALREADY_EXISTS, null));
        }
        await this.checkIfPasswordIsValid(loginDtoDto.password, data.password);
        const token = await this.addTokensToUser(data);
        return {
            email: token.email,
            id: token.id,
            name: token.name,
            accessToken: token.accessToken,
        };
    }
    async changePassword(changePasswordDto) {
        const data = await this.userRepo.findUserByEmail(changePasswordDto.email);
        if (!data) {
            throw new common_1.BadRequestException(new response_dto_1.ErrorDto(messages_1.ERROR_MESSAGES.EMAIL_NOT_EXISTS, null));
        }
        await this.checkIfPasswordIsValid(changePasswordDto.oldPassword, data.password);
        changePasswordDto.newPassword = await this.encryptPassword(changePasswordDto.newPassword);
        return this.userRepo.updatePassword(changePasswordDto);
    }
    async forgotPassword(forgotPasswordDto) {
        const data = await this.userRepo.findUserByEmail(forgotPasswordDto.email);
        if (!data) {
            throw new common_1.BadRequestException(new response_dto_1.ErrorDto(messages_1.ERROR_MESSAGES.EMAIL_NOT_EXISTS, null));
        }
        forgotPasswordDto.newPassword = await this.encryptPassword(forgotPasswordDto.newPassword);
        return this.userRepo.forgotPassword(forgotPasswordDto);
    }
    async ssoLoginService(ssoLoginDto) {
        let data = await this.userRepo.findUserByEmail(ssoLoginDto.email);
        if (!data) {
            await this.userRepo.createNewUser(ssoLoginDto);
            data = await this.userRepo.findUserByEmail(ssoLoginDto.email);
        }
        const token = await this.addTokensToUser(data);
        return {
            email: token.email,
            id: token.id,
            name: token.name,
            accessToken: token.accessToken,
        };
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repo_1.UserRepo])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map