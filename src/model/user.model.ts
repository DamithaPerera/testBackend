import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';

export type UserDocument = User & Document;

@Schema({
  timestamps: true,
})
export class User {
  @Prop({
    type: String,
    default: () => uuidv4(),
  })
  id: string;

  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop()
  role: string;

  @Prop()
  accessToken: string;

  @Prop()
  refreshToken: string;

  @Prop({
    type: Boolean,
    default: () => false,
  })
  googleSSO: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
