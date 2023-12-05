import { Injectable } from '@nestjs/common';
import { gtData } from './banks-data/gt';
import { kudaData } from './banks-data/kuda';
import { ubaData } from './banks-data/uba';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  connectBank(accountNo: string, bankName: string): any {
    switch (bankName) {
      case 'gt':
        return gtData;
      case 'kuda':
        return kudaData;
      case 'uba':
        return ubaData;
      default:
        return 'Bank not found';
    }
  }
}
