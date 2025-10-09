import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { FinanceWallet } from "src/repositories/finance.wallet.repository";
import { CurrencyResponseDto } from "./currency.response.dto";
import { MonthReportResponseDto } from "./month.report.response.dto";
import { TransactionResponseDto } from "./transaction.response.dto";

export class FinanceResponseDto {
  @ApiProperty({ description: "Unique ID of the financial wallet", example: "uuid-1234" })
  id: string;

  @ApiProperty({ description: "Name of the wallet", example: "Main Wallet" })
  name: string;

  @ApiProperty({ description: "Current balance of the wallet", example: 1500.75 })
  balance: number;

  @ApiProperty({ description: "ID of the associated currency", example: "uuid-9876" })
  currencyId: string;

  @ApiProperty({ description: "ID of the user who owns the wallet", example: "uuid-5678" })
  userId: string;

  @ApiPropertyOptional({ description: "Currency details (if loaded via include)" })
  currency?: CurrencyResponseDto;

  @ApiPropertyOptional({ description: "Month report details (if loaded via include)" })
  monthReports?: MonthReportResponseDto[];

  @ApiPropertyOptional({ description: "Transaction details (if loaded via include)"})
  transactions?: TransactionResponseDto[];


  constructor(finance: FinanceWallet) {
    this.id = finance.id;
    this.name = finance.name;
    this.balance = finance.balance;
    this.currencyId = finance.currencyId;
    this.userId = finance.userId;

    if (finance.currency) {
      this.currency = new CurrencyResponseDto(finance.currency);
    }

    if (finance.monthReports && finance.monthReports.length > 0) {
      this.monthReports = finance.monthReports.map(
        report => new MonthReportResponseDto(report)
      );
    }

    if (finance.transactions && finance.transactions.length > 0) {
      this.transactions = finance.transactions.map(
        transaction => new TransactionResponseDto(transaction)
      )
    }
  }
}
