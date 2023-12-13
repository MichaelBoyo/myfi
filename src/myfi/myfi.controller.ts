import { Body, Controller, Post } from '@nestjs/common';
import { MyfiService } from './myfi.service';
import { Response } from 'src/common/Response';
import { ConnectBankDTO } from './dtos/connectBank.dto';

@Controller('myfi')
export class MyfiController {
  constructor(private readonly myfiService: MyfiService) {}

  @Post('/connect-bank')
  async connectBank(@Body() connectBankDTO: ConnectBankDTO) {
    return new Response(
      true,
      'successful!',
      await this.myfiService.connectBank(connectBankDTO),
    );
  }

  @Post('/connected-banks')
  async getConnectedBanks() {
    return new Response(
      true,
      'successful!',
      await this.myfiService.getConnectedBanks(),
    );
  }

  @Post('/transactions')
  async getTransactions() {
    return new Response(
      true,
      'successful!',
      await this.myfiService.getTransactions(),
    );
  }
}
