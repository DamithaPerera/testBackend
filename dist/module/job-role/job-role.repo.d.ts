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
import { JobRoleUpdateDto } from './dto/jobRoleUpdate.dto';
import { JobRole, JobRoleDocument } from '../../model/jobRole.model';
export declare class JobRoleRepo {
    private jobRoleModel;
    constructor(jobRoleModel: Model<JobRoleDocument>);
    createJobRoleRepo: (data: object) => Promise<import("mongoose").Document<unknown, {}, JobRoleDocument> & JobRole & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    listAllJobRoleRepo: (limit: number, skip: number) => Promise<(import("mongoose").Document<unknown, {}, JobRoleDocument> & JobRole & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    GetOneJobRoleRepo: (jobRoleNumber: string) => Promise<import("mongoose").Document<unknown, {}, JobRoleDocument> & JobRole & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    UpdateOneJobRoleRepo: (jobRoleNumber: string, jobRoleUpdateDto: JobRoleUpdateDto) => Promise<import("mongoose").Document<unknown, {}, JobRoleDocument> & JobRole & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    DeleteJobRoleRepo: (jobRoleNumber: string) => Promise<import("mongodb").DeleteResult>;
}
