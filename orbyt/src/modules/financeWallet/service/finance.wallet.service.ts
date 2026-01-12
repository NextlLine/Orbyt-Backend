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
  ) { }

  async findAllWallets(userId: string) {
    const finances = await this.financeRepository.findAll(userId);
    // console.dir(finances, { depth: null }); 

    return {
      message: "Wallets retrieved successfully",
      data: finances.map((f) => new FinanceResponseDto(f)),
    };
  }

  async createWallet(userId: string, data: FinanceRequestDto) {
    const newWallet = await this.financeRepository.create({
      ...data,
      userId: userId,
    });

    return {
      message: "Wallet created successfully",
      data: new FinanceResponseDto(newWallet),
    };
  }

  async updateFinanceWallet(id: string, data: FinanceRequestDto) {

    await this.verifyWalletId(id);

    const updatedWallet = await this.financeRepository.update(id, data);

    return {
      message: "Wallet updated successfully",
      data: new FinanceResponseDto(updatedWallet),
    }
  }

  async deleteWallet(id: string) {
    await this.verifyWalletId(id)
    await this.financeRepository.delete(id)

    return {
      message: "Wallet deleted successfully"
    }
  }

  async verifyWalletId(id: string) {
    const walletTarget = this.financeRepository.findById(id)

    if (!walletTarget) throw new NotFoundException("Wallet not found")
  }
}