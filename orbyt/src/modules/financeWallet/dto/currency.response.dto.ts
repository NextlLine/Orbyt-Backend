import { ApiProperty } from "@nestjs/swagger";
import { Currency } from "src/infra/model/model";

export class CurrencyResponseDto {
  @ApiProperty({ description: "Unique ID of the currency", example: "uuid-1234" })
  id: string;

  @ApiProperty({ description: "Currency symbol", example: "$" })
  symbol: string;

  @ApiProperty({ description: "Currency code (ISO 4217)", example: "USD" })
  code: string;

  constructor(currency: Currency) {
    this.id = currency.id;
    this.symbol = currency.symbol;
    this.code = currency.code;
  }
}
