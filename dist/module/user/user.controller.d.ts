import { UserService } from './user.service';
import { SignupDtoDto } from './dto/signup.dto';
import { LoginDtoDto } from './dto/login.dto';
import { ChangePasswordDto } from './dto/changePassword.dto';
import { ForgotPasswordDto } from './dto/forgotPassword.dto';
import { SsoLoginDto } from './dto/ssoLogin.dto';
import { SuccessDto } from '../../common/helpers/responses/response-dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signUp(signupDtoDto: SignupDtoDto): Promise<SuccessDto>;
    login(loginDtoDto: LoginDtoDto): Promise<SuccessDto>;
    ssoLogin(ssoLoginDto: SsoLoginDto): Promise<SuccessDto>;
    changePassword(changePasswordDto: ChangePasswordDto): Promise<SuccessDto>;
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<SuccessDto>;
    createRole(): Promise<SuccessDto>;
}
