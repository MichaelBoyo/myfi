import { DateTime } from 'luxon';
import { TxType, SupportedBanks } from 'src/types';
import { BANKS, TX_DESCRIPTIONS } from 'src/constants';
import { Transaction } from 'src/bank/schemas/Transactions.schema';
import * as Chance from 'chance';

const generateRandomDates = (
  startDate: string,
  endDate: string,
  numDates: number,
): number[] => {
  // Convert dates to Luxon DateTime objects
  const startDateTime = DateTime.fromISO(startDate);
  const endDateTime = DateTime.fromISO(endDate);

  // Check if dates are valid
  if (!startDateTime.isValid || !endDateTime.isValid) {
    console.error('Invalid date format');
    return [];
  }

  // Calculate the difference in days
  const daysDiff = endDateTime.diff(startDateTime, 'days');

  // Generate random dates
  const randomDates: number[] = [];
  for (let i = 0; i < numDates; i++) {
    const randomDayOffset = Math.random() * daysDiff.days;
    const randomDate = startDateTime.plus({ days: randomDayOffset });
    randomDates.push(randomDate.valueOf());
  }

  return randomDates;
};

const generateRandomAmounts = (): number => {
  return 1000;
};

const getRandomBank = (): SupportedBanks => {
  return BANKS[Math.floor(Math.random() * BANKS.length)];
};

export const generateRandomTransactions = async (
  startDate: string,
  endDate: string,
  bank: SupportedBanks,
  userName: string,
  txCount?: number,
) => {
  // Convert dates to Luxon DateTime objects
  const startDateTime = DateTime.fromISO(startDate);
  const endDateTime = DateTime.fromISO(endDate);
  const transactions: Transaction[] = [];
  const txTypes: TxType[] = ['debit', 'credit'];
  const chance = new Chance();

  // Check if dates are valid
  if (!startDateTime.isValid || !endDateTime.isValid) {
    console.error('Invalid date format');
    return [];
  }

  if (txCount) {
    // when amountIn > amountOut, tx.to.bank should be the @Params bankName
    // when amountOut > amountIn, tx.from.bank should be the @Params bankName
    let txType: TxType;
    for (let i = 0; i < txCount; i++) {
      txType = txTypes[Math.floor(Math.random() * txTypes.length)];
      transactions.push({
        from: {
          name: txType === 'debit' ? userName : chance.name(), // random name
          bank: txType === 'debit' ? bank : getRandomBank(),
        },
        to: {
          name: txType === 'credit' ? userName : chance.name(), // random name
          bank: txType === 'credit' ? bank : getRandomBank(),
        },
        amountIn: txType === 'credit' ? generateRandomAmounts() : 0,
        amountOut: txType === 'debit' ? generateRandomAmounts() : 0,
        dateLiteral: '',
        timestamp: '',
        desc: TX_DESCRIPTIONS[
          Math.floor(Math.random() * TX_DESCRIPTIONS.length)
        ],
      });
    }
  }

  // Calculate the difference in days
  // const daysDiff = endDateTime.diff(startDateTime, 'days');
  return transactions;
};

// // Example usage
// const startDate = '2023-12-01';
// const endDate = '2023-12-13';
// const numDates = 10;

// const randomDates = generateRandomDates(startDate, endDate, numDates);
// generateRandomTransactions(startDate, endDate);

// console.log('Generated random dates:');
// console.log(randomDates);
