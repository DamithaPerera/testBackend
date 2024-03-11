import { Injectable } from '@nestjs/common';
import { JobRoleRepo } from './job-role.repo';
import { JobRoleCreateDto } from './dto/jobRoleCreate.dto';
import { JobRoleUpdateDto } from './dto/jobRoleUpdate.dto';

@Injectable()
export class JobRoleService {
  constructor(private readonly jobRoleRepo: JobRoleRepo) {
    this.jobRoleRepo = jobRoleRepo;
  }

  async createJobRoleService(jobRoleCreateDto: JobRoleCreateDto) {
    return this.jobRoleRepo.createJobRoleRepo(jobRoleCreateDto);
  }

  async listAllJobRoleService(page: number, limit: number) {
    const skip = (page - 1) * limit;
    return this.jobRoleRepo.listAllJobRoleRepo(limit, skip);
  }

  async GetOneJobRoleService(jobRoleNumber: string) {
    return this.jobRoleRepo.GetOneJobRoleRepo(jobRoleNumber);
  }

  async UpdateOneJobRoleService(
    jobRoleNumber: string,
    jobRoleUpdateDto: JobRoleUpdateDto,
  ) {
    return this.jobRoleRepo.UpdateOneJobRoleRepo(
      jobRoleNumber,
      jobRoleUpdateDto,
    );
  }

  async DeleteJobRoleService(jobRoleNumber: string) {
    return this.jobRoleRepo.DeleteJobRoleRepo(jobRoleNumber);
  }
}
