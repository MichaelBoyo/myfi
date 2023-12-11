import { Optional } from '@nestjs/common';

export class TxFilterDto {
  @Optional()
  startDate?: string;
}
