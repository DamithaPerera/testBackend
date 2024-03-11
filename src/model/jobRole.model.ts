import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';

export type JobRoleDocument = JobRole & Document;

@Schema({
  timestamps: true,
})
export class JobRole {
  @Prop({
    type: String,
    default: () => uuidv4(),
  })
  id: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  skills: string;

  @Prop()
  createdUser: string;

  @Prop()
  assignedUser: string;
}

export const JobRoleSchema = SchemaFactory.createForClass(JobRole);
