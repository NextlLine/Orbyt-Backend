import { ConflictException, Inject, Injectable } from "@nestjs/common";
import { createHash, hash } from "crypto";
import { CreateUserDtoRequest } from "src/modules/auth/dto/create.user.request.dto";
import type { UserRepository } from "src/repositories/user.repository";

@Injectable()
export class AuthService {

    constructor(
        @Inject('UserRepository')
        private readonly userRepository: UserRepository
    ) {}

    async createUser(newUserDto: CreateUserDtoRequest) {
    const existing = await this.userRepository.findByEmail(newUserDto.email);
    if (existing) {
      throw new ConflictException("Email already being used");
    }

    const passHash = createHash('sha1').update(newUserDto.hash).digest('hex');
    newUserDto.hash = passHash;

    const user = await this.userRepository.create(newUserDto);
    return user;
  }
}
