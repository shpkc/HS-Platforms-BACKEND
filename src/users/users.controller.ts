import {
  Request,
  Body,
  Controller,
  NotFoundException,
  Post,
  UseGuards,
  Get,
  Response,
  ForbiddenException,
} from "@nestjs/common";
import { ApiCookieAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { LocalAuthGuard } from "../auth/local-auth.guard";
import { NotLoggedInGuard } from "../auth/not-logged-in.guard";
import { LoggedInGuard } from "../auth/logged-in.guard";
import { User } from "../decorators/user.decorator";
import { Users } from "../entities/Users";
import { JoinRequestDto } from "./dto/join.request.dto";
import { LoginRequestDto } from "./dto/login.request.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiCookieAuth("connect.sid")
  @Get()
  async getProfile(@User() user: Users) {
    return user || false;
  }

  @UseGuards(LocalAuthGuard)
  @Post("/login")
  async login(@User() user: Users) {
    return user;
  }

  @UseGuards(NotLoggedInGuard)
  @Post("/signup")
  async join(@Body() data: JoinRequestDto) {
    const user = this.usersService.findByEmail(data.email);

    if (!user) {
      throw new NotFoundException();
    }
    const result = await this.usersService.join(
      data.email,
      data.nickname,
      data.password
    );
    if (result) {
      return "ok";
    } else {
      throw new ForbiddenException();
    }
  }

  @ApiCookieAuth("connect.sid")
  @ApiOperation({ summary: "로그아웃" })
  @UseGuards(LoggedInGuard)
  @Post("logout")
  async logout(@Response() res) {
    res.clearCookie("connect.sid", { httpOnly: true });
    return res.send("ok");
  }
}
