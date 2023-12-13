import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BankDocument = HydratedDocument<Bank>;

@Schema()
export class Bank {
  @Prop()
  name: string;

  @Prop()
  logoUrl: number;

  @Prop()
  balance: string;
}

export const BankSchema = SchemaFactory.createForClass(Bank);
