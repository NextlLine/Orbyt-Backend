import { Module } from "@nestjs/common";
import { AuthService } from "./service/auth.service";
import { AuthController } from "./controller/auth.controller";
import { PrismaUserRepository } from "src/repositories/user.repository";
import { prisma } from "src/infra/prisma/client";
import { PrismaClient } from "@prisma/client";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { jwtConstants } from "./constrants";

@Module({
  controllers: [AuthController],
  providers: [
    AuthService, 
    {
      provide: 'UserRepository',
      useClass: PrismaUserRepository,
    },
  ],
})
export class AuthModule {}

