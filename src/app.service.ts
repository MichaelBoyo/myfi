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
        return { data: gtData };
      case 'kuda':
        return { data: kudaData };
      case 'uba':
        return { data: ubaData };
      default:
        return 'Bank not found';
    }
  }
}
