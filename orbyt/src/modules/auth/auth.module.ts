import { Module } from "@nestjs/common";
import { AuthService } from "./service/auth.service";
import { AuthController } from "./controller/auth.controller";
import { PrismaUserRepository } from "src/repositories/user.repository";
import { prisma } from "src/infra/prisma/client";
import { PrismaClient } from "@prisma/client";

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaUserRepository,
    {
      provide: PrismaClient,
      useValue: prisma, 
    },
    {
      provide: 'UserRepository',
      useClass: PrismaUserRepository,
    },
  ],
})
export class AuthModule {}
