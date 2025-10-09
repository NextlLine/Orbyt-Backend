import { ApiProperty } from "@nestjs/swagger";
import { Currency, MonthReport } from "src/repositories/finance.wallet.repository";

export class MonthReportResponseDto {
  @ApiProperty({ description: "Unique ID of the currency", example: "uuid-1234" })
  id: string;

  @ApiProperty({ description: "Date of the report", example: "10" })
  date: Date;

  @ApiProperty({ description: "Balance of the mont", example: "1230" })
  monthBalance: number;

  @ApiProperty({ description: "Id of the wallet", example: "10" })
  walletId: string;

  constructor(monthReport: MonthReport) {
    this.id = monthReport.id,
    this.date = monthReport.date,
    this.monthBalance = monthReport.monthBalance,
  
    this.walletId = monthReport.walletId
  }
}
