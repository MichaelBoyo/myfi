import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { BankUser } from './BankUser.schema';

export type TransactionDocument = HydratedDocument<Transaction>;

@Schema()
export class Transaction {
  @Prop()
  from: BankUser;

  @Prop()
  to: BankUser;

  @Prop()
  amountIn: number;

  @Prop()
  amountOut: number;

  @Prop()
  timestamp: string;

  @Prop()
  dateLiteral?: string;

  @Prop()
  desc: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
