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
    example: "title of post",
    description: "title",
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: "content of post",
    description: "content",
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  readonly readOnlyData: {
    title: string;
    content: string;
  };
}

const _PostSchema = SchemaFactory.createForClass(Post);

_PostSchema.virtual("readOnlyData").get(function (this: Post) {
  return {
    title: this.title,
    content: this.content,
  };
});

_PostSchema.set("toObject", { virtuals: true });
_PostSchema.set("toJSON", { virtuals: true });

export const PostSchema = _PostSchema;
