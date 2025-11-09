import { Injectable } from "@nestjs/common";
import { FinanceWallet, PrismaClient } from "@prisma/client";

export abstract class FinanceWalletRepository {
    abstract findAll(userid: string): Promise<FinanceWallet[]>;
    abstract findById(id: string): Promise<FinanceWallet | null>;
    abstract create(newWallet: Omit<FinanceWallet, "id" | "currency" | "monthReports" | "transactions">): Promise<FinanceWallet>;
    abstract update(id: string, data: Partial<Omit<FinanceWallet, "currency" | "monthReports" | "transactions">>): Promise<FinanceWallet>;
    abstract delete(id: string): Promise<void>;
}

@Injectable()
export class PrismaFinanceWalletRepository implements FinanceWalletRepository {
    constructor(private readonly prisma: PrismaClient) { }

    async findAll(userId: string): Promise<FinanceWallet[]> {
        return await this.prisma.financeWallet.findMany({ where: { userId }, include: { currency: true, monthReports: true, transactions: true } })
    }
    async findById(id: string): Promise<FinanceWallet | null> {
        return await this.prisma.financeWallet.findUnique({ where: { id } })
    }
    async create(newWallet: Omit<FinanceWallet, "id" | "currency" | "monthReports" | "transactions">): Promise<FinanceWallet> {
        return await this.prisma.financeWallet.create({ data: { ...newWallet } })
    }
    async update(id: string, data: Partial<Omit<FinanceWallet, "currency" | "monthReports" | "transactions">>): Promise<FinanceWallet> {
        return await this.prisma.financeWallet.update({
            where: { id },
            data: { ...data }
        })
    }
    async delete(id: string): Promise<void> {
        await this.prisma.financeWallet.delete({ where: { id } })
    }
}