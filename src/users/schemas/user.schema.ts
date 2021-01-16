import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  static userName: String;

  @Prop()
  password: String;

  @Prop()
  email: String;
}

export const UserSchema = SchemaFactory.createForClass(User);