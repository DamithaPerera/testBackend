import { Model } from 'mongoose';
import { JobRoleUpdateDto } from './dto/jobRoleUpdate.dto';
import { JobRole, JobRoleDocument } from '../../model/jobRole.model';
export declare class JobRoleRepo {
    private jobRoleModel;
    constructor(jobRoleModel: Model<JobRoleDocument>);
    createJobRoleRepo: (data: object) => Promise<import("mongoose").Document<unknown, {}, JobRoleDocument> & JobRole & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    listAllJobRoleRepo: (limit: number, skip: number, page: number) => Promise<{
        total: number;
        data: (import("mongoose").FlattenMaps<JobRoleDocument> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        limit: number;
        page: number;
    }>;
    GetOneJobRoleRepo: (jobRoleNumber: string) => Promise<import("mongoose").Document<unknown, {}, JobRoleDocument> & JobRole & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    UpdateOneJobRoleRepo: (jobRoleNumber: string, jobRoleUpdateDto: JobRoleUpdateDto) => Promise<import("mongoose").Document<unknown, {}, JobRoleDocument> & JobRole & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    DeleteJobRoleRepo: (jobRoleNumber: string) => Promise<import("mongodb").DeleteResult>;
}
