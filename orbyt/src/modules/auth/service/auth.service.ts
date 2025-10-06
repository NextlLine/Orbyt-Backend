import { Injectable } from "@nestjs/common";
import { CreateUserDtoRequest } from "src/modules/auth/dto/create.user.request.dto";
import type { UserRepository } from "src/repositories/user.repository";

@Injectable()
export class AuthService {
    constructor(userRepository: UserRepository) {}

    createUser(newUserDto: CreateUserDtoRequest) {
        throw new Error("Method not implemented.");
    }
}