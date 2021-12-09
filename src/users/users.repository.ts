import { CommentsSchema } from "../comments/comments.schema";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import * as mongoose from "mongoose";
import { User } from "./users.schema";
import { UserRequestDto } from "./dto/users.request.dto";

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}

  async findAll() {
    const result = await this.userModel.find();

    return result;
  }
  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  async findUserByIdWithoutPassword(
    userId: string | Types.ObjectId
  ): Promise<User | null> {
    const user = await this.userModel.findById(userId).select("-password");
    return user;
  }

  async existsByEmail(email: string): Promise<boolean> {
    const result = await this.userModel.exists({ email });
    return result;
  }

  async create(user: UserRequestDto): Promise<User> {
    return await this.userModel.create(user);
  }
}
