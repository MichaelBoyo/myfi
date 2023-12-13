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
    // generate numerous transactions for the bank connected
    // store transactions in db & send them to the frontend
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

  getLatestTransactions(txFilter?: TxFilterDto): any {
    // query db to find transactions greater than the txFilter.startDate
    // get the distance between the range of today and the latest transaction
    // if difference is > 1day, generate some dummy data to add to db
    // add dummy data to array returned by the db query & respond
  }
}
