import { Injectable, NotFoundException } from "@nestjs/common";
import { FinanceWalletRepository } from "src/repositories/finance.wallet.repository";
import { UserRepository } from "src/repositories/user.repository";
import { FinanceResponseDto } from "../dto/finance.response.dto";
import { FinanceRequestDto } from "../dto/finance.request.dto";

@Injectable()
export class FinanceService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly financeRepository: FinanceWalletRepository
  ) {}

  async findAllWallets(userId: string) {
    await this.verifyUserId(userId);

    const finances = await this.financeRepository.findAll(userId);
    // console.dir(finances, { depth: null }); // 👈 mostra todos os dados aninhados

    return {
      message: "Wallets retrieved successfully",
      data: finances.map((finance) => new FinanceResponseDto(finance)),
    };
  }

  async createWallet(userId: string, data: FinanceRequestDto) {
    await this.verifyUserId(userId);

    const newWallet = await this.financeRepository.create({
      ...data,
      userId: userId, 
    });

    return {
      message: "Wallet created successfully",
      data: new FinanceResponseDto(newWallet),
    };
  }

  async verifyUserId(id: string) {
    const existing = await this.userRepository.findById(id);

    if (!existing) throw new NotFoundException("User not found");
  }
}
