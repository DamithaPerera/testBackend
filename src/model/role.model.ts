import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';
import { RolesEnum } from '../common/enums/roles.enum';

export type RoleDocument = Role & Document;

@Schema({
  timestamps: true,
})
export class Role {
  @Prop({
    type: String,
    default: () => uuidv4(),
  })
  id: string;

  @Prop({
    type: String,
    enum: RolesEnum,
  })
  name: string;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
