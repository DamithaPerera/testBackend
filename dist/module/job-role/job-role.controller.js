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
exports.JobRoleController = void 0;
const common_1 = require("@nestjs/common");
const jobRoleCreate_dto_1 = require("./dto/jobRoleCreate.dto");
const job_role_service_1 = require("./job-role.service");
const jobRoleUpdate_dto_1 = require("./dto/jobRoleUpdate.dto");
const response_dto_1 = require("../../common/helpers/responses/response-dto");
const messages_1 = require("../../common/constant/messages");
let JobRoleController = class JobRoleController {
    constructor(jobRoleService) {
        this.jobRoleService = jobRoleService;
    }
    async createJobRole(jobRoleCreateDto) {
        await this.jobRoleService.createJobRoleService(jobRoleCreateDto);
        return new response_dto_1.SuccessDto(messages_1.SUCCESS_MESSAGES.JOB_ROLE_CREATED, null);
    }
    async GetAllJobRole(page, limit) {
        const data = await this.jobRoleService.listAllJobRoleService(page, limit);
        return new response_dto_1.SuccessDto(messages_1.SUCCESS_MESSAGES.JOB_ROLE_LIST, data);
    }
    async GetOneJobRole(jobRoleNumber) {
        const data = await this.jobRoleService.GetOneJobRoleService(jobRoleNumber);
        return new response_dto_1.SuccessDto(messages_1.SUCCESS_MESSAGES.JOB_ROLE_LIST_ONE, data);
    }
    async UpdateOneJobRole(jobRoleNumber, jobRoleUpdateDto) {
        const data = await this.jobRoleService.UpdateOneJobRoleService(jobRoleNumber, jobRoleUpdateDto);
        return new response_dto_1.SuccessDto(messages_1.SUCCESS_MESSAGES.JOB_ROLE_UPDATED, data);
    }
    async DeleteJobRole(jobRoleNumber) {
        await this.jobRoleService.DeleteJobRoleService(jobRoleNumber);
        return new response_dto_1.SuccessDto(messages_1.SUCCESS_MESSAGES.JOB_ROLE_DELETED, null);
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED.valueOf()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [jobRoleCreate_dto_1.JobRoleCreateDto]),
    __metadata("design:returntype", Promise)
], JobRoleController.prototype, "createJobRole", null);
__decorate([
    (0, common_1.Get)('/all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK.valueOf()),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], JobRoleController.prototype, "GetAllJobRole", null);
__decorate([
    (0, common_1.Get)('/:jobRoleNumber'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK.valueOf()),
    __param(0, (0, common_1.Param)('jobRoleNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobRoleController.prototype, "GetOneJobRole", null);
__decorate([
    (0, common_1.Put)('/:jobRoleNumber'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK.valueOf()),
    __param(0, (0, common_1.Param)('jobRoleNumber')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, jobRoleUpdate_dto_1.JobRoleUpdateDto]),
    __metadata("design:returntype", Promise)
], JobRoleController.prototype, "UpdateOneJobRole", null);
__decorate([
    (0, common_1.Delete)('/:jobRoleNumber'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK.valueOf()),
    __param(0, (0, common_1.Param)('jobRoleNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobRoleController.prototype, "DeleteJobRole", null);
JobRoleController = __decorate([
    (0, common_1.Controller)('v1/jobRole'),
    __metadata("design:paramtypes", [job_role_service_1.JobRoleService])
], JobRoleController);
exports.JobRoleController = JobRoleController;
//# sourceMappingURL=job-role.controller.js.map