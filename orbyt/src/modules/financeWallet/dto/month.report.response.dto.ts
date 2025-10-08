import { ApiProperty } from "@nestjs/swagger";
import { Currency, MonthReport } from "src/repositories/finance.wallet.repository";

export class MonthReportResponseDto {
  @ApiProperty({ description: "Unique ID of the currency", example: "uuid-1234" })
  id: string;

  @ApiProperty({ description: "Month of the year", example: "10" })
  month: number;

  @ApiProperty({ description: "Current year", example: "2025" })
  year: number;

  @ApiProperty({ description: "Balance of the mont", example: "1230" })
  monthBalance: number;

  @ApiProperty({ description: "Id of the wallet", example: "10" })
  walletId: string;

  constructor(monthReport: MonthReport) {
    this.id = monthReport.id,
    this.month = monthReport.month,
    this.monthBalance = monthReport.monthBalance,
    this.year = monthReport.year,
    this.walletId = monthReport.walletId
  }
}
