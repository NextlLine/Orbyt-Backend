import { Module } from "@nestjs/common";
import { PrismaTransactionRepository, TransactionRepository } from "src/repositories/transaction.repository";
import { TransactionService } from "./service/transaction.service";
import { TransactionController } from "./controller/transaction.controller";
import { FinanceWalletRepository, PrismaFinanceWalletRepository } from "src/repositories/finance.wallet.repository";

@Module({
  controllers: [TransactionController],
  providers: [
    TransactionService,
    { provide: TransactionRepository, useClass: PrismaTransactionRepository },
    { provide: FinanceWalletRepository, useClass: PrismaFinanceWalletRepository }
  ],
})
export class TransactionModule { }