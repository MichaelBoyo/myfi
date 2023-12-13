import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TransactionsDocument = HydratedDocument<Transactions>;

@Schema()
export class Transactions {
  @Prop()
  from: string;

  @Prop()
  to: number;

  @Prop()
  balance: string;
}

export const TransactionsSchema = SchemaFactory.createForClass(Transactions);
