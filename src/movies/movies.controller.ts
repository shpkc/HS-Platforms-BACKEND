import {
  Controller,
  Get,
  UseGuards,
  Post,
  Body,
  Param,
  Query,
  UseInterceptors,
  UploadedFiles,
  ParseIntPipe,
} from "@nestjs/common";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { ApiCookieAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import fs from "fs";
import multer from "multer";
import path from "path";
import { LoggedInGuard } from "../auth/logged-in.guard";
import { User } from "../decorators/user.decorator";
import { Users } from "../entities/Users";
import { MoviesService } from "./movies.service";

@ApiTags("MOVIES")
@Controller("api/movies")
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  // @ApiOperation({ summary: "워크스페이스 채널 모두 가져오기" })
  // @Get(":url/channels")
  // async getWorkspaceChannels(@Param("url") url, @User() user: Users) {
  //   return this.channelsService.getWorkspaceChannels(url, user.id);
  // }

  // @ApiOperation({ summary: "워크스페이스 특정 채널 가져오기" })
  // @Get(":url/channels/:name")
  // async getWorkspaceChannel(@Param("url") url, @Param("name") name) {
  //   return this.channelsService.getWorkspaceChannel(url, name);
  // }

  // @ApiOperation({ summary: "워크스페이스 채널 만들기" })
  // @Post(":url/channels")
  // async createWorkspaceChannels(
  //   @Param("url") url,
  //   @Body() body: CreateChannelDto,
  //   @User() user: Users
  // ) {
  //   return this.channelsService.createWorkspaceChannels(
  //     url,
  //     body.name,
  //     user.id
  //   );
  // }

  // @ApiOperation({ summary: "워크스페이스 채널 멤버 가져오기" })
  // @Get(":url/channels/:name/members")
  // async getWorkspaceChannelMembers(
  //   @Param("url") url: string,
  //   @Param("name") name: string
  // ) {
  //   return this.channelsService.getWorkspaceChannelMembers(url, name);
  // }

  @ApiOperation({ summary: "영화에 출연한 배우 가져오기" })
  @Get(":title/members")
  async getMovieMembers(@Param("title") title: string) {
    return this.moviesService.getMovieMembers(title);
  }

  @ApiOperation({ summary: "영화에 배우 추가하기" })
  @Post(":title/actors/:name")
  async createMovieActors(@Param("title") title, @Param("name") name: string) {
    return this.moviesService.createMovieActors(title, name);
  }
}
