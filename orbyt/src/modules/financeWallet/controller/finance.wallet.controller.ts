import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/util/jwt.guard";
import { Request } from '@nestjs/common';
import { FinanceService } from "../service/finance.wallet.service";
import { FinanceRequestDto } from "../dto/finance.request.dto";

@Controller('finance')
export class FinanceController {
    constructor(private readonly financeWalletService: FinanceService) { }

    @UseGuards(AuthGuard)
    @Get()
    async findAllWallets(@Request() req) {
        return await this.financeWalletService.findAllWallets(req.user.sub)
    }

    @UseGuards(AuthGuard)
    @Post()
    async createFinanceWallet(@Request() req, @Body() data: FinanceRequestDto) {
        return await this.financeWalletService.createWallet(req.user.sub, data)
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async deleteFinanceWallet(@Param('id') id: string) {
        return await this.financeWalletService.deleteWallet(id);
    }

    @UseGuards(AuthGuard)
    @Put(':id')
    async updateFinanceWallet(@Param('id') id: string, data: FinanceRequestDto) {
        return await this.financeWalletService.updateFinanceWallet(id, data)
    }
}