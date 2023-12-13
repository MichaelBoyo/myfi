import { Controller, Post } from '@nestjs/common';
import { MyfiService } from './myfi.service';
import { Response } from 'src/common/Response';

@Controller('myfi')
export class MyfiController {
  constructor(private readonly myfiService: MyfiService) {}

  @Post('/connect-bank')
  async connectBank() {
    return new Response(
      true,
      'successful!',
      await this.myfiService.connectBank(),
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
