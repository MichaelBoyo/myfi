import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BankUserDocument = HydratedDocument<BankUser>;

@Schema()
export class BankUser {
  @Prop()
  name: string;

  @Prop()
  bank: string;
}

export const BankUserSchema = SchemaFactory.createForClass(BankUser);
