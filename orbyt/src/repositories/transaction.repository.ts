import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { Transaction } from "src/infra/model/model";

export abstract class TransactionRepository {
    abstract findAll(walletId: string): Promise<Transaction[]>;
    abstract findById(id: string): Promise<Transaction | null>;
    abstract create(data: Omit<Transaction, "id">): Promise<Transaction>;
    abstract update(id: string, data: Partial<Transaction>): Promise<Transaction>;
    abstract delete(id: string): Promise<void>;
}

@Injectable()
export class PrismaTransactionRepository implements TransactionRepository {

    constructor(private readonly prisma: PrismaClient) { }

    async findAll(walletId: string): Promise<Transaction[]> {
        return await this.prisma.transaction.findMany({ where: { walletId } }) as Transaction[]
    }
    async findById(id: string): Promise<Transaction | null> {
        return await this.prisma.transaction.findUnique({ where: { id } }) as Transaction
    }
    async create(data: Omit<Transaction, "id">): Promise<Transaction> {
        return await this.prisma.transaction.create({ data: { ...data } }) as Transaction
    }
    async update(id: string, data: Partial<Transaction>): Promise<Transaction> {
        return await this.prisma.transaction.update({
            where: { id },
            data: { ...data }
        }) as Transaction
    }
    async delete(id: string): Promise<void> {
        await this.prisma.financeWallet.delete({ where: { id } })
    }
}