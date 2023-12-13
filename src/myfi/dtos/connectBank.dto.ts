import { IsNotEmpty, IsEnum } from 'class-validator';
import { SupportedBanks } from 'src/types';

export class ConnectBankDTO {
  @IsNotEmpty()
  @IsEnum(SupportedBanks)
  name: SupportedBanks;
}
