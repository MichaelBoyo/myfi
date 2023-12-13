import { Body, Controller, Get, Param, Post, Optional } from '@nestjs/common';
import { AppService } from './app.service';
import { TxFilterDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/connect/:accountNo/:bankName')
  connectBank(@Param() params: any, @Body() @Optional() txFilter: TxFilterDto) {
    console.log({ txFilter });
    return this.appService.connectBank(
      params.accountNo,
      params.bankName,
      txFilter,
    );
  }

  @Post('/transactions/:bankName')
  getLatestTransactions(
    @Param() params: any,
    @Body() @Optional() txFilter: TxFilterDto,
  ) {
    return [];
  }
}
