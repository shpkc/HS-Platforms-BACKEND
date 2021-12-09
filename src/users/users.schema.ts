import { Comments } from "../comments/comments.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Document, SchemaOptions } from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class User extends Document {
  @ApiProperty({
    example: "abc@naver.com",
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
    description: "nickname",
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  nickname: string;

  @ApiProperty({
    example: "1234",
    description: "password",
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  readonly readOnlyData: {
    id: string;
    email: string;
    nickname: string;
  };
}

const _UserSchema = SchemaFactory.createForClass(User);

_UserSchema.virtual("readOnlyData").get(function (this: User) {
  return {
    id: this.id,
    email: this.email,
    nickname: this.nickname,
  };
});

_UserSchema.virtual("comments", {
  ref: "comments",
  localField: "_id",
  foreignField: "info",
});
_UserSchema.set("toObject", { virtuals: true });
_UserSchema.set("toJSON", { virtuals: true });

export const UserSchema = _UserSchema;
