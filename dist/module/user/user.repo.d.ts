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
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { ChangePasswordDto } from './dto/changePassword.dto';
import { ForgotPasswordDto } from './dto/forgotPassword.dto';
import { User, UserDocument } from '../../model/user.model';
import { Role, RoleDocument } from '../../model/role.model';
export declare class UserRepo {
    private userModel;
    private roleModel;
    constructor(userModel: Model<UserDocument>, roleModel: Model<RoleDocument>);
    findUserByEmail: (email: string) => Promise<import("mongoose").FlattenMaps<UserDocument> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createNewUser: (data: object) => Promise<import("mongoose").Document<unknown, {}, UserDocument> & User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findOneByEmailAndUpdate: (email: string, token: string) => Promise<import("mongoose").FlattenMaps<UserDocument> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updatePassword: (changePasswordDto: ChangePasswordDto) => Promise<import("mongoose").Document<unknown, {}, UserDocument> & User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    forgotPassword: (forgotPasswordDto: ForgotPasswordDto) => Promise<import("mongoose").Document<unknown, {}, UserDocument> & User & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createRole: () => Promise<import("mongoose").Document<unknown, {}, RoleDocument> & Role & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
