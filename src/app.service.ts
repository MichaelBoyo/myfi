import { Injectable } from '@nestjs/common';
import { gtData } from './banks-data/gt';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  connectBank(accountNo: string, bankName: string): any {
    switch (bankName) {
      case 'gtBank':
        return gtData;
      default:
        return 'Bank not found';
    }
  }
}
