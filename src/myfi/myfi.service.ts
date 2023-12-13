import { Injectable } from '@nestjs/common';
import { Bank } from 'src/bank/schemas/Bank.schema';
import { Transaction } from 'src/bank/schemas/Transactions.schema';
import { SupportedBanks } from 'src/types';
import { generateRandomTransactions } from 'src/utils';
// import  {Chance} from 'chance';
// const chance = new Chance();

@Injectable()
export class MyfiService {
  async connectBank(): Promise<Transaction[]> {
    return generateRandomTransactions(
      '2023-11-13T20:21:29.939Z',
      '2023-12-13T20:21:29.939Z',
      SupportedBanks.KUDA,
      'Oladeji Joshua',
      16,
    );
  }

  async getConnectedBanks(): Promise<Bank[]> {
    return [
      {
        name: SupportedBanks.KUDA,
        balance: 155_000.55,
      },
      {
        name: SupportedBanks.UBA,
        balance: 300_000,
      },
    ];
  }

  async getTransactions(): Promise<Transaction[]> {
    return generateRandomTransactions(
      '2023-11-13T20:21:29.939Z',
      '2023-12-13T20:21:29.939Z',
      SupportedBanks.KUDA,
      'Oladeji Joshua',
      16,
    );
  }
}
