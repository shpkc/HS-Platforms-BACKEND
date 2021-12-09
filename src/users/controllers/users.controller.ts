import {
  Body,
  UploadedFiles,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { Controller, Get, Post } from "@nestjs/common";
import { HttpExceptionFilter } from "src/common/exceptions/http-exception.filter";
import { SuccessInterceptor } from "src/common/interceptors/success.interceptor";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { ReadOnlyUserDto } from "../../users/dto/user.dto";
import { AuthService } from "src/auth/auth.service";
import { LoginRequestDto } from "src/auth/dto/login.request.dto";
import { JwtAuthGuard } from "src/auth/jwt/jwt.guard";
import { CurrentUser } from "src/common/decorators/user.decorator";
import { UsersService } from "../services/users.service";
import { UserRequestDto } from "../dto/users.request.dto";

@Controller("users")
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService
  ) {}

  @ApiOperation({ summary: "현재 유저 가져오기" })
  @UseGuards(JwtAuthGuard)
  @Get()
  getCurrentUser(@CurrentUser() user) {
    return user.readOnlyData;
  }

  @ApiResponse({
    status: 500,
    description: "Server Error...",
  })
  @ApiResponse({
    status: 200,
    description: "성공!",
    type: ReadOnlyUserDto,
  })
  @ApiOperation({ summary: "회원가입" })
  @Post()
  async signUp(@Body() body: UserRequestDto) {
    return await this.usersService.signUp(body);
  }

  @ApiOperation({ summary: "로그인" })
  @Post("login")
  logIn(@Body() data: LoginRequestDto) {
    return this.authService.jwtLogIn(data);
  }

  @ApiOperation({ summary: "모든 유저 가져오기" })
  @Get("all")
  getAllCat() {
    return this.usersService.getAllUser();
  }
}
