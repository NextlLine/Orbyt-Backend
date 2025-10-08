import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

export type FinanceWallet = {
    id: string,
    name: string,
    balance: number,
    currencyId: string,
    userId: string,
    currency?: Currency,
    monthReports?: MonthReport[],
}

export type MonthReport = {
  id: string ,
  month: number,
  year: number,
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
        return this.prisma.financeWallet.findMany({ where: { userId }, include: { currency: true, monthReports: true } })
    }
    async findById(id: string): Promise<FinanceWallet | null> {
        return this.prisma.financeWallet.findUnique({ where: { id } })
    }
    async create(newWallet: Omit<FinanceWallet,  "id" | "currency" | "monthReports">): Promise<FinanceWallet> {
        return this.prisma.financeWallet.create({ data: { ...newWallet } })
    }
    async update(id: string, data: Partial<Omit<FinanceWallet, "currency" | "monthReports">>): Promise<FinanceWallet> {
        return this.prisma.financeWallet.update({
            where: { id: data.id },
            data: { ...data }
        })
    }
    async delete(id: string): Promise<void> {
        this.prisma.financeWallet.delete({ where: { id } })
    }
}