export type FinanceWallet = {
    id: string,
    name: string,
    balance: number,
    currencyId: string,
    userId: string,
    currency?: Currency,
    transactions?: Transaction[]
    monthReports?: MonthReport[],
}

export type Transaction = {
    id: string,
    description: string,
    amount: number,
    date: Date,
    type: TransactionType,
    walletId: string,
}
export type MonthReport = {
    id: string,
    date: Date,
    monthBalance: number,
    walletId: string,
}

export type Currency = {
    id: string,
    symbol: string,
    code: string,
}

export type User = {
    id: string,
    email: string,
    hash: string,
    name: string,
    activatedAt: Date | null,
    doc: string, 
}

export enum TransactionType {
  FOOD = 'FOOD',
  HEALTH = 'HEALTH',
  OTHER = 'OTHER',
}

export enum InvestmentCategory {
  STOCK = 'STOCK',
  FII = 'FII',
  ETF = 'ETF',
  CRYPTO = 'CRYPTO',
  FIXED_INCOME = 'FIXED_INCOME',
}