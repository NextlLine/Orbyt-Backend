import { Module } from "@nestjs/common";
import { AuthService } from "./service/auth.service";
import { AuthController } from "./controller/auth.controller";
import { PrismaUserRepository, UserRepository } from "src/repositories/user.repository";

@Module({
  controllers: [AuthController],
  providers: [
    AuthService, 
    { provide: UserRepository, useClass: PrismaUserRepository },
  ],
})
export class AuthModule {}
