export enum SupportedBanks {
  UBA = 'UBA',
  KUDA = 'Kuda',
  FIDELITY = 'Fidelity',
  GTBANK = 'GTBank',
  ZENITH = 'Zenith',
}

export type TxType = 'debit' | 'credit';

interface Entity {
  name: string;
  bank: string;
}

export interface Transaction {
  from: Entity;
  to: Entity;
  amountIn: number;
  amountOut: number;
  timestamp: string;
  dateLiteral?: string;
  desc: string;
}
