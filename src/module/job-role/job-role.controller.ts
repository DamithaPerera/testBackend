import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { JobRoleCreateDto } from './dto/jobRoleCreate.dto';
import { JobRoleService } from './job-role.service';
import { JobRoleUpdateDto } from './dto/jobRoleUpdate.dto';
import { SuccessDto } from '../../common/helpers/responses/response-dto';
import { SUCCESS_MESSAGES } from '../../common/constant/messages';

@Controller('v1/jobRole')
export class JobRoleController {
  constructor(private readonly jobRoleService: JobRoleService) {}

  @Post('/create')
  @HttpCode(HttpStatus.CREATED.valueOf())
  async createJobRole(@Body() jobRoleCreateDto: JobRoleCreateDto) {
    await this.jobRoleService.createJobRoleService(jobRoleCreateDto);
    return new SuccessDto(SUCCESS_MESSAGES.JOB_ROLE_CREATED, null);
  }

  @Get('/all')
  @HttpCode(HttpStatus.OK.valueOf())
  async GetAllJobRole(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    const data = await this.jobRoleService.listAllJobRoleService(page, limit);
    return new SuccessDto(SUCCESS_MESSAGES.JOB_ROLE_LIST, data);
  }

  @Get('/:jobRoleNumber')
  @HttpCode(HttpStatus.OK.valueOf())
  async GetOneJobRole(@Param('jobRoleNumber') jobRoleNumber: string) {
    const data = await this.jobRoleService.GetOneJobRoleService(jobRoleNumber);
    return new SuccessDto(SUCCESS_MESSAGES.JOB_ROLE_LIST_ONE, data);
  }

  @Put('/:jobRoleNumber')
  @HttpCode(HttpStatus.OK.valueOf())
  async UpdateOneJobRole(
    @Param('jobRoleNumber') jobRoleNumber: string,
    @Body() jobRoleUpdateDto: JobRoleUpdateDto,
  ) {
    const data = await this.jobRoleService.UpdateOneJobRoleService(
      jobRoleNumber,
      jobRoleUpdateDto,
    );
    return new SuccessDto(SUCCESS_MESSAGES.JOB_ROLE_UPDATED, data);
  }

  @Delete('/:jobRoleNumber')
  @HttpCode(HttpStatus.OK.valueOf())
  async DeleteJobRole(@Param('jobRoleNumber') jobRoleNumber: string) {
    await this.jobRoleService.DeleteJobRoleService(jobRoleNumber);
    return new SuccessDto(SUCCESS_MESSAGES.JOB_ROLE_DELETED, null);
  }
}
