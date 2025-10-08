import { Injectable, NotFoundException } from "@nestjs/common";
import { FinanceWalletRepository } from "src/repositories/finance.wallet.repository";
import { UserRepository } from "src/repositories/user.repository";
import { UserResponseDto } from "../dto/user.response.dto";

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  async getBasicUser(id: string) {
    const user = await this.userRepository.findById(id);

    if (!user) throw new NotFoundException("User not found");

    return new UserResponseDto(user);
  }
}
