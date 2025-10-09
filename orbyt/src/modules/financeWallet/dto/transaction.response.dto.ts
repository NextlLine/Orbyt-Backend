import { ApiProperty } from "@nestjs/swagger";
import { TransactionType } from "@prisma/client";
import { Transaction } from "src/repositories/finance.wallet.repository";

export class TransactionResponseDto {
    @ApiProperty({ description: "Unique ID of the transaction", example: "uuid-1234" })
    id: string;

    @ApiProperty({ description: "Description of the transaction", example: "Bought stuff's house" })
    description: string;

    @ApiProperty({ description: "Amount used", example: 130.32 })
    amount: number;

    @ApiProperty({ description: "Date the transaction occurred", example: "2025-10-08T12:00:00Z" })
    date: Date;

    @ApiProperty({ description: "Type of transaction", enum: TransactionType })
    type: TransactionType;

    @ApiProperty({ description: "Currency symbol", example: "$" })
    walletId: string;

    constructor(transaction: Transaction) {
        this.id = transaction.id;
        this.description = transaction.description;
        this.amount = transaction.amount;
        this.date = transaction.date;
        this.type = transaction.type;
        this.walletId = transaction.walletId;
    }
}
