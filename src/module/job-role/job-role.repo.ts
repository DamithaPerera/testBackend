import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JobRoleUpdateDto } from './dto/jobRoleUpdate.dto';
import { JobRole, JobRoleDocument } from '../../model/jobRole.model';
import { STATIC_VALUES } from '../../common/constant/constant';

@Injectable()
export class JobRoleRepo {
  constructor(
    @InjectModel(JobRole.name) private jobRoleModel: Model<JobRoleDocument>,
  ) {
    this.jobRoleModel = jobRoleModel;
  }

  createJobRoleRepo = async (data: object) => {
    return this.jobRoleModel.create(data);
  };

  listAllJobRoleRepo = async (limit: number, skip: number, page: number) => {
    const total = await this.jobRoleModel.countDocuments();

    // Retrieve the documents based on the provided limit and skip parameters
    const data = await this.jobRoleModel
      .find()
      .sort('-createdAt')
      .skip(skip)
      .limit(limit)
      .select(STATIC_VALUES.unwantedFields)
      .lean();

    return { total, data, limit, page: page };
  };

  GetOneJobRoleRepo = async (jobRoleNumber: string) => {
    return this.jobRoleModel
      .findOne({ id: jobRoleNumber })
      .select(STATIC_VALUES.unwantedFields);
  };

  UpdateOneJobRoleRepo = async (
    jobRoleNumber: string,
    jobRoleUpdateDto: JobRoleUpdateDto,
  ) => {
    console.log('jobRoleUpdateDto', jobRoleUpdateDto);
    console.log('jobRoleNumber', jobRoleNumber);
    return this.jobRoleModel
      .findOneAndUpdate(
        { id: jobRoleNumber },
        {
          title: jobRoleUpdateDto.title,
          description: jobRoleUpdateDto.description,
        },
        { new: true },
      )
      .select(STATIC_VALUES.unwantedFields);
  };

  DeleteJobRoleRepo = async (jobRoleNumber: string) => {
    return this.jobRoleModel.deleteOne({ id: jobRoleNumber });
  };
}
