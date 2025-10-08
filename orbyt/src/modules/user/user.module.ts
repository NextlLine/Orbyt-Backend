import { Module } from "@nestjs/common";
import { FinanceWalletRepository, PrismaFinanceWalletRepository } from "src/repositories/finance.wallet.repository";

import { UserRepository, PrismaUserRepository } from "src/repositories/user.repository";
import { UserController } from "./controller/user.controller";
import { UserService } from "./service/user.service";

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    { provide: UserRepository, useClass: PrismaUserRepository },
  ],
})
export class UserModule { }