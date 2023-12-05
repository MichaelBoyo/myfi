import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/:accountNo/:bankName')
  connectBank(@Param() params: any) {
    return this.appService.connectBank(params.accountNo, params.bankName);
  }
}
