import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignupDtoDto } from './dto/signup.dto';
import { LoginDtoDto } from './dto/login.dto';
import { ChangePasswordDto } from './dto/changePassword.dto';
import { ForgotPasswordDto } from './dto/forgotPassword.dto';
import { SsoLoginDto } from './dto/ssoLogin.dto';
import { SuccessDto } from '../../common/helpers/responses/response-dto';
import { SUCCESS_MESSAGES } from '../../common/constant/messages';

@Controller('v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  @HttpCode(HttpStatus.CREATED.valueOf())
  async signUp(@Body() signupDtoDto: SignupDtoDto) {
    await this.userService.signUp(signupDtoDto);
    return new SuccessDto(SUCCESS_MESSAGES.USER_CREATED, null);
  }

  @Post('/login')
  @HttpCode(HttpStatus.OK.valueOf())
  async login(@Body() loginDtoDto: LoginDtoDto) {
    const data = await this.userService.login(loginDtoDto);
    return new SuccessDto(SUCCESS_MESSAGES.USER_LOGIN, data);
  }

  @Post('/sso')
  @HttpCode(HttpStatus.OK.valueOf())
  async ssoLogin(@Body() ssoLoginDto: SsoLoginDto) {
    const data = await this.userService.ssoLoginService(ssoLoginDto);
    return new SuccessDto(SUCCESS_MESSAGES.USER_LOGIN, data);
  }

  @Post('/change-password')
  @HttpCode(HttpStatus.OK.valueOf())
  async changePassword(@Body() changePasswordDto: ChangePasswordDto) {
    await this.userService.changePassword(changePasswordDto);
    return new SuccessDto(SUCCESS_MESSAGES.PASSWORD_CHANGED, null);
  }

  @Post('/forgot-password')
  @HttpCode(HttpStatus.OK.valueOf())
  async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    await this.userService.forgotPassword(forgotPasswordDto);
    return new SuccessDto(SUCCESS_MESSAGES.PASSWORD_CHANGED, null);
  }
}
