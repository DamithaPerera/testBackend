import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ChangePasswordDto } from './dto/changePassword.dto';
import { ForgotPasswordDto } from './dto/forgotPassword.dto';
import { User, UserDocument } from '../../model/user.model';

@Injectable()
export class UserRepo {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    this.userModel = userModel;
  }

  findUserByEmail = async (email: string) => {
    return this.userModel
      .findOne({ email: { $regex: email, $options: 'i' } })
      .lean();
  };

  createNewUser = async (data: object) => {
    return this.userModel.create(data);
  };

  findOneByEmailAndUpdate = async (email: string, token: string) => {
    return this.userModel
      .findOneAndUpdate(
        {
          email: email,
        },
        { accessToken: token },
      )
      .setOptions({ new: true })
      .lean();
  };

  updatePassword = async (changePasswordDto: ChangePasswordDto) => {
    return this.userModel.findOneAndUpdate(
      { email: changePasswordDto.email },
      { password: changePasswordDto.newPassword },
    );
  };

  forgotPassword = async (forgotPasswordDto: ForgotPasswordDto) => {
    return this.userModel.findOneAndUpdate(
      { email: forgotPasswordDto.email },
      { password: forgotPasswordDto.newPassword },
    );
  };
}
