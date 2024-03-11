import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepo } from './user.repo';
import { SignupDtoDto } from './dto/signup.dto';
import * as bcrypt from 'bcrypt';
import { LoginDtoDto } from './dto/login.dto';
import { ChangePasswordDto } from './dto/changePassword.dto';
import { ForgotPasswordDto } from './dto/forgotPassword.dto';
import { sign } from 'jsonwebtoken';
import { SsoLoginDto } from './dto/ssoLogin.dto';
import { ErrorDto } from '../../common/helpers/responses/response-dto';
import { ERROR_MESSAGES } from '../../common/constant/messages';
import { STATIC_VALUES } from '../../common/constant/constant';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepo) {
    this.userRepo = userRepo;
  }

  async signUp(signupDtoDto: SignupDtoDto) {
    const email = await this.userRepo.findUserByEmail(signupDtoDto.email);
    if (email) {
      throw new BadRequestException(
        new ErrorDto(ERROR_MESSAGES.EMAIL_ALREADY_EXISTS, null),
      );
    }
    signupDtoDto.password = await this.encryptPassword(signupDtoDto.password);
    return this.userRepo.createNewUser(signupDtoDto);
  }

  encryptPassword = async (password: string) => {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  };

  async login(loginDtoDto: LoginDtoDto) {
    const data = await this.userRepo.findUserByEmail(loginDtoDto.email);
    if (!data) {
      throw new BadRequestException(
        new ErrorDto(ERROR_MESSAGES.EMAIL_ALREADY_EXISTS, null),
      );
    }
    await this.checkIfPasswordIsValid(loginDtoDto.password, data.password);
    const token = await this.addTokensToUser(data);
    return {
      email: token.email,
      id: token.id,
      name: token.name,
      accessToken: token.accessToken,
    };
  }

  addTokensToUser = async (user) => {
    const token = this.getJwt(user.email, user.roles, user.id);
    return this.userRepo.findOneByEmailAndUpdate(user.email, token);
  };

  getJwt = (email: string, role: any, id: string) => {
    const data = {
      email: email,
      roles: role,
      id: id,
    };
    return sign(data, STATIC_VALUES.jwtSecret, {
      expiresIn: STATIC_VALUES.jwtExpirationMs,
    });
  };

  checkIfPasswordIsValid = async (password, passwordInDb) => {
    const isValid = await this.comparePasswords(password, passwordInDb);
    if (!isValid) {
      throw new BadRequestException(
        new ErrorDto(ERROR_MESSAGES.INVALID_CREDENTIALS, null),
      );
    }
  };

  comparePasswords = (password, hashedPassword) =>
    bcrypt.compare(password, hashedPassword);

  async changePassword(changePasswordDto: ChangePasswordDto) {
    const data = await this.userRepo.findUserByEmail(changePasswordDto.email);
    if (!data) {
      throw new BadRequestException(
        new ErrorDto(ERROR_MESSAGES.EMAIL_NOT_EXISTS, null),
      );
    }
    await this.checkIfPasswordIsValid(
      changePasswordDto.oldPassword,
      data.password,
    );
    changePasswordDto.newPassword = await this.encryptPassword(
      changePasswordDto.newPassword,
    );
    return this.userRepo.updatePassword(changePasswordDto);
  }

  async forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
    const data = await this.userRepo.findUserByEmail(forgotPasswordDto.email);
    if (!data) {
      throw new BadRequestException(
        new ErrorDto(ERROR_MESSAGES.EMAIL_NOT_EXISTS, null),
      );
    }

    forgotPasswordDto.newPassword = await this.encryptPassword(
      forgotPasswordDto.newPassword,
    );
    return this.userRepo.forgotPassword(forgotPasswordDto);
  }

  async ssoLoginService(ssoLoginDto: SsoLoginDto) {
    let data = await this.userRepo.findUserByEmail(ssoLoginDto.email);

    if (!data) {
      await this.userRepo.createNewUser(ssoLoginDto);
      data = await this.userRepo.findUserByEmail(ssoLoginDto.email);
    }
    const token = await this.addTokensToUser(data);
    return {
      email: token.email,
      id: token.id,
      name: token.name,
      accessToken: token.accessToken,
    };
  }
}
