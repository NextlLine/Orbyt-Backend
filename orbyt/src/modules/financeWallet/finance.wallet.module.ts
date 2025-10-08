import { Module } from "@nestjs/common";
import { FinanceWalletRepository, PrismaFinanceWalletRepository } from "src/repositories/finance.wallet.repository";
import { FinanceController } from "./controller/finance.wallet.controller";
import { FinanceService } from "./service/finance.wallet.service";
import { UserRepository, PrismaUserRepository } from "src/repositories/user.repository";

@Module({
  controllers: [FinanceController],
  providers: [
    FinanceService,
    { provide: FinanceWalletRepository, useClass: PrismaFinanceWalletRepository },
    { provide: UserRepository, useClass: PrismaUserRepository },
  ],
})
export class FinanceModule { }