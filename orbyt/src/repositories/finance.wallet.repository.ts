import { Injectable } from "@nestjs/common";
import { PrismaClient, TransactionType } from "@prisma/client"; 

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

export abstract class FinanceWalletRepository {
    abstract findAll(userid: string): Promise<FinanceWallet[]>;
    abstract findById(id: string): Promise<FinanceWallet | null>;
    abstract create(data: Omit<FinanceWallet, "id">): Promise<FinanceWallet>;
    abstract update(id: string, data: Partial<FinanceWallet>): Promise<FinanceWallet>;
    abstract delete(id: string): Promise<void>;
}

@Injectable()
export class PrismaFinanceWalletRepository implements FinanceWalletRepository {
    constructor(private readonly prisma: PrismaClient) { }

    async findAll(userId: string): Promise<FinanceWallet[]> {
        return this.prisma.financeWallet.findMany({ where: { userId }, include: { currency: true, monthReports: true, transactions: true } })
    }
    async findById(id: string): Promise<FinanceWallet | null> {
        return this.prisma.financeWallet.findUnique({ where: { id } })
    }
    async create(newWallet: Omit<FinanceWallet, "id" | "currency" | "monthReports" | "transactions">): Promise<FinanceWallet> {
        return this.prisma.financeWallet.create({ data: { ...newWallet } })
    }
    async update(id: string, data: Partial<Omit<FinanceWallet, "currency" | "monthReports" | "transactions">>): Promise<FinanceWallet> {
        return this.prisma.financeWallet.update({
            where: { id: data.id },
            data: { ...data }
        })
    }
    async delete(id: string): Promise<void> {
        this.prisma.financeWallet.delete({ where: { id } })
    }
}