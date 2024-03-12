/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { UserRepo } from './user.repo';
import { SignupDtoDto } from './dto/signup.dto';
import { LoginDtoDto } from './dto/login.dto';
import { ChangePasswordDto } from './dto/changePassword.dto';
import { ForgotPasswordDto } from './dto/forgotPassword.dto';
import { SsoLoginDto } from './dto/ssoLogin.dto';
export declare class UserService {
    private readonly userRepo;
    constructor(userRepo: UserRepo);
    signUp(signupDtoDto: SignupDtoDto): Promise<import("mongoose").Document<unknown, {}, import("../../model/user.model").UserDocument> & import("../../model/user.model").User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    encryptPassword: (password: string) => Promise<any>;
    login(loginDtoDto: LoginDtoDto): Promise<{
        email: string;
        id: string;
        name: string;
        accessToken: string;
    }>;
    addTokensToUser: (user: any) => Promise<import("mongoose").FlattenMaps<import("../../model/user.model").UserDocument> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getJwt: (email: string, role: any, id: string) => any;
    checkIfPasswordIsValid: (password: any, passwordInDb: any) => Promise<void>;
    comparePasswords: (password: any, hashedPassword: any) => any;
    changePassword(changePasswordDto: ChangePasswordDto): Promise<import("mongoose").Document<unknown, {}, import("../../model/user.model").UserDocument> & import("../../model/user.model").User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<import("mongoose").Document<unknown, {}, import("../../model/user.model").UserDocument> & import("../../model/user.model").User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    ssoLoginService(ssoLoginDto: SsoLoginDto): Promise<{
        email: string;
        id: string;
        name: string;
        accessToken: string;
    }>;
}
