import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import getDbConnectionUri from './config/database/getDbConnectionUri';
import { UserModule } from './module/user/user.module';
import { JobRoleModule } from './module/job-role/job-role.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(getDbConnectionUri(), {
      autoIndex: true,
    }),
    UserModule,
    JobRoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
