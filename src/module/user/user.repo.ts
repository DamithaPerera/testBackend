import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ChangePasswordDto } from './dto/changePassword.dto';
import { ForgotPasswordDto } from './dto/forgotPassword.dto';
import { User, UserDocument } from '../../model/user.model';
import { Role, RoleDocument } from '../../model/role.model';
import { RolesEnum } from '../../common/enums/roles.enum';

@Injectable()
export class UserRepo {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Role.name) private roleModel: Model<RoleDocument>,
  ) {
    this.userModel = userModel;
    this.roleModel = roleModel;
  }

  findUserByEmail = async (email: string) => {
    return this.userModel
      .findOne({ email: { $regex: email, $options: 'i' } })
      .populate({
        path: 'roleId',
        model: 'Role',
        select: 'name id',
        foreignField: 'id',
      })
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

  // TEMP
  createRole = async () => {
    return this.roleModel.create({
      name: RolesEnum.HIRING_MANAGER,
    });
  };
}
