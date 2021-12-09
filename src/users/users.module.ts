import { forwardRef, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MulterModule } from "@nestjs/platform-express";
import { AuthModule } from "src/auth/auth.module";
import { User, UserSchema } from "./users.schema";
import { UsersController } from "./controllers/users.controller";
import { UsersService } from "./services/users.service";
import { UsersRepository } from "./users.repository";

@Module({
  imports: [
    MulterModule.register({
      dest: "./upload",
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    forwardRef(() => AuthModule),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService, UsersRepository],
})
export class UsersModule {}
