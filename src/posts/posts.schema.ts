import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Document, SchemaOptions } from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Post extends Document {
  @ApiProperty({
    example: "amamov@kakao.com",
    description: "email",
    required: true,
  })
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: "amamov",
    description: "name",
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "23810",
    description: "password",
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @Prop({
    default:
      "https://github.com/amamov/NestJS-solid-restapi-boilerplate/raw/main/docs/images/1.jpeg",
  })
  @IsString()
  imgUrl: string;

  readonly readOnlyData: {
    id: string;
    email: string;
    name: string;
    imgUrl: string;
  };
}

const _PostSchema = SchemaFactory.createForClass(Post);

_PostSchema.virtual("readOnlyData").get(function (this: Post) {
  return {
    id: this.id,
    email: this.email,
    name: this.name,
    imgUrl: this.imgUrl,
  };
});

_PostSchema.set("toObject", { virtuals: true });
_PostSchema.set("toJSON", { virtuals: true });

export const PostSchema = _PostSchema;
