import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/util/jwt.guard";
import { Request } from '@nestjs/common';
import { TransactionService } from "../service/transaction.service";
import { TransactionRequestDto } from "../dto/transaction.request.dto";


@Controller('finance')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) { }

    @UseGuards(AuthGuard)
    @Get(':walletId')
    async findAllWallets(@Param('walletId') walletId: string) {
        return await this.transactionService.findAllTransactions(walletId)
    }

    @UseGuards(AuthGuard)
    @Post()
    async createTransaction(@Body() data: TransactionRequestDto) {
        return await this.transactionService.createTransaction(data)
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async deleteTransaction(@Param('id') id: string) {
        return await this.transactionService.deleteTransaction(id);
    }

    @UseGuards(AuthGuard)
    @Put(':id')
    async updateTransaction(@Param('id') id: string, @Body() data: TransactionRequestDto) {
        return await this.transactionService.updateTransaction(id, data)
    }
}