import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Bank } from './Bank.schema';
import * as mongoose from 'mongoose';

export type BankUserDocument = HydratedDocument<BankUser>;

@Schema()
export class BankUser {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Bank' })
  bank: Bank;
}

export const BankUserSchema = SchemaFactory.createForClass(BankUser);
