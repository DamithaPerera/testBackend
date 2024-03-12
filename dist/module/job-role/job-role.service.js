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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobRoleService = void 0;
const common_1 = require("@nestjs/common");
const job_role_repo_1 = require("./job-role.repo");
let JobRoleService = class JobRoleService {
    constructor(jobRoleRepo) {
        this.jobRoleRepo = jobRoleRepo;
        this.jobRoleRepo = jobRoleRepo;
    }
    async createJobRoleService(jobRoleCreateDto) {
        return this.jobRoleRepo.createJobRoleRepo(jobRoleCreateDto);
    }
    async listAllJobRoleService(page, limit) {
        const skip = (page - 1) * limit;
        return this.jobRoleRepo.listAllJobRoleRepo(limit, skip);
    }
    async GetOneJobRoleService(jobRoleNumber) {
        return this.jobRoleRepo.GetOneJobRoleRepo(jobRoleNumber);
    }
    async UpdateOneJobRoleService(jobRoleNumber, jobRoleUpdateDto) {
        return this.jobRoleRepo.UpdateOneJobRoleRepo(jobRoleNumber, jobRoleUpdateDto);
    }
    async DeleteJobRoleService(jobRoleNumber) {
        return this.jobRoleRepo.DeleteJobRoleRepo(jobRoleNumber);
    }
};
JobRoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [job_role_repo_1.JobRoleRepo])
], JobRoleService);
exports.JobRoleService = JobRoleService;
//# sourceMappingURL=job-role.service.js.map