import { JobRoleCreateDto } from './dto/jobRoleCreate.dto';
import { JobRoleService } from './job-role.service';
import { JobRoleUpdateDto } from './dto/jobRoleUpdate.dto';
import { SuccessDto } from '../../common/helpers/responses/response-dto';
export declare class JobRoleController {
    private readonly jobRoleService;
    constructor(jobRoleService: JobRoleService);
    createJobRole(jobRoleCreateDto: JobRoleCreateDto): Promise<SuccessDto>;
    GetAllJobRole(page: number, limit: number): Promise<SuccessDto>;
    GetOneJobRole(jobRoleNumber: string): Promise<SuccessDto>;
    UpdateOneJobRole(jobRoleNumber: string, jobRoleUpdateDto: JobRoleUpdateDto): Promise<SuccessDto>;
    DeleteJobRole(jobRoleNumber: string): Promise<SuccessDto>;
}
