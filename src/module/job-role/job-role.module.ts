import { Module } from '@nestjs/common';
import { JobRoleService } from './job-role.service';
import { JobRoleRepo } from './job-role.repo';
import { JobRoleController } from './job-role.controller';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../model/user.model';
import { JobRole, JobRoleSchema } from '../../model/jobRole.model';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: JobRole.name, schema: JobRoleSchema },
    ]),
  ],
  controllers: [JobRoleController],
  providers: [JobRoleService, JobRoleRepo],
})
export class JobRoleModule {}
