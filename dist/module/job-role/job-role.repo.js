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
exports.JobRoleRepo = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const jobRole_model_1 = require("../../model/jobRole.model");
const constant_1 = require("../../common/constant/constant");
let JobRoleRepo = class JobRoleRepo {
    constructor(jobRoleModel) {
        this.jobRoleModel = jobRoleModel;
        this.createJobRoleRepo = async (data) => {
            return this.jobRoleModel.create(data);
        };
        this.listAllJobRoleRepo = async (limit, skip) => {
            return this.jobRoleModel
                .find()
                .sort('-createdAt')
                .skip(skip)
                .limit(limit)
                .select(constant_1.STATIC_VALUES.unwantedFields);
        };
        this.GetOneJobRoleRepo = async (jobRoleNumber) => {
            return this.jobRoleModel
                .findOne({ id: jobRoleNumber })
                .select(constant_1.STATIC_VALUES.unwantedFields);
        };
        this.UpdateOneJobRoleRepo = async (jobRoleNumber, jobRoleUpdateDto) => {
            console.log('jobRoleUpdateDto', jobRoleUpdateDto);
            console.log('jobRoleNumber', jobRoleNumber);
            return this.jobRoleModel
                .findOneAndUpdate({ id: jobRoleNumber }, {
                title: jobRoleUpdateDto.title,
                description: jobRoleUpdateDto.description,
            }, { new: true })
                .select(constant_1.STATIC_VALUES.unwantedFields);
        };
        this.DeleteJobRoleRepo = async (jobRoleNumber) => {
            return this.jobRoleModel.deleteOne({ id: jobRoleNumber });
        };
        this.jobRoleModel = jobRoleModel;
    }
};
JobRoleRepo = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(jobRole_model_1.JobRole.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], JobRoleRepo);
exports.JobRoleRepo = JobRoleRepo;
//# sourceMappingURL=job-role.repo.js.map