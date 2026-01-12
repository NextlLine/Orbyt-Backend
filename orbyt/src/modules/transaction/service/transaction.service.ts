import { Injectable, NotFoundException } from "@nestjs/common";
import { TransactionRepository } from "src/repositories/transaction.repository";
import { TransactionRequestDto } from "../dto/transaction.request.dto";
import { TransactionResponseDto } from "src/modules/transaction/dto/transaction.response.dto";
import { FinanceWalletRepository } from "src/repositories/finance.wallet.repository";


@Injectable()
export class TransactionService {

    constructor(
        private readonly transactionRepository: TransactionRepository,
        private readonly financeRepository: FinanceWalletRepository
    ) { }

    async findAllTransactions(walletId: string) {
        const walletTarget = await this.financeRepository.findById(walletId);
        if (!walletTarget) throw new Error("wallet not found");

        const transactions = await this.transactionRepository.findAll(walletId);

        return {
            message: "transactions retrieved successfully",
            data: transactions.map((t) => new TransactionResponseDto(t)),
        };
    }

    async createTransaction(data: TransactionRequestDto) {
        const newTransaction = await this.transactionRepository.create({
            ...data,
        });

        await this.financeRepository.addAmount(data.walletId, data.amount);

        return {
            message: "Transaction created successfully",
            data: new TransactionResponseDto(newTransaction)
        };
    }

    async updateTransaction(id: string, data: TransactionRequestDto) {
        if (data.walletId == undefined) throw new Error("id of the wallet not informed");

        await this.verifyTransactionId(id);

        const updatedTransaction = await this.transactionRepository.update(id, data)

        return {
            message: "Transaction updated successfully",
            data: new TransactionResponseDto(updatedTransaction),
        }
    }

    async deleteTransaction(id: string) {
        await this.verifyTransactionId(id);

        await this.transactionRepository.delete(id)

        return {
            message: "Transaction deleted successfully"
        }
    }

    async verifyTransactionId(id: string) {
        const transactionTarget = this.transactionRepository.findById(id)

        if (!transactionTarget) throw new NotFoundException("transaction not found")
    }
}