import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsOptional } from "class-validator";

export class FinanceRequestDto {
  @ApiProperty({ description: "Name of the wallet", example: "Main Wallet" })
  @IsString()
  name: string;

  @ApiProperty({ description: "Current balance of the wallet", example: 1500.75 })
  @IsNumber()
  balance: number;

  @ApiProperty({ description: "ID of the associated currency", example: "USD" })
  @IsString()
  currencyId: string;
}
