import { Injectable } from '@nestjs/common';
import { gtData } from './banks-data/gt';
import { kudaData } from './banks-data/kuda';
import { ubaData } from './banks-data/uba';
import { TxFilterDto } from './app.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  connectBank(
    accountNo: string,
    bankName: string,
    txFilter?: TxFilterDto,
  ): any {
    console.log({ bankName });
    let txs: any[];

    switch (bankName) {
      case 'gt':
        txs = gtData;
        break;
      case 'kuda':
        txs = kudaData;
        break;
      case 'uba':
        txs = ubaData;
        break;
      default:
        txs = [];
    }

    return txs.length === 0 || !txFilter || JSON.stringify(txFilter) === '{}'
      ? txs
      : txs.filter((tx) => tx.timestamp > txFilter.startDate);
  }
}
