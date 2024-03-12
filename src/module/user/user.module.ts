import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepo } from './user.repo';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { User, UserSchema } from '../../model/user.model';
import { JobRole, JobRoleSchema } from '../../model/jobRole.model';
import { Role, RoleSchema } from '../../model/role.model';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: JobRole.name, schema: JobRoleSchema },
      { name: Role.name, schema: RoleSchema },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepo],
})
export class UserModule {}
