import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Post } from "./posts.schema";
import { PostRequestDto } from "./dto/posts.request.dto";
import * as mongoose from "mongoose";

@Injectable()
export class PostsRepository {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<Post>
  ) {}

  async findAll() {
    const result = await this.postModel.find();
    return result;
  }

  async findByIdAndUpdateImg(id: string, fileName: string) {
    const cat = await this.postModel.findById(id);

    const newCat = await cat.save();

    return newCat.readOnlyData;
  }

  async findCatByIdWithoutPassword(
    catId: string | Types.ObjectId
  ): Promise<Post | null> {
    const cat = await this.postModel.findById(catId).select("-password");
    return cat;
  }

  async findCatByEmail(email: string): Promise<Post | null> {
    const cat = await this.postModel.findOne({ email });
    return cat;
  }

  async existsByEmail(email: string): Promise<boolean> {
    const result = await this.postModel.exists({ email });
    return result;
  }

  async create(post: PostRequestDto): Promise<Post> {
    return await this.postModel.create(post);
  }
}
