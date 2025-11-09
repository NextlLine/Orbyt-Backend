import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsDateString, IsEnum } from "class-validator";
import { TransactionType } from "src/infra/model/model";

export class TransactionRequestDto {
  @ApiProperty({
    description: "Descrição da transação",
    example: "Compra de créditos",
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: "Valor da transação",
    example: 150.75,
  })
  @IsNumber()
  amount: number;

  @ApiProperty({
    description: "Data da transação (ISO 8601)",
    example: "2025-10-23T15:30:00Z",
  })
  @IsDateString()
  date: Date;

  @ApiProperty({
    description: "Tipo da transação",
    enum: TransactionType,
    example: TransactionType.OTHER,
  })
  @IsEnum(TransactionType)
  type: TransactionType;

  @ApiProperty({
    description: "ID da carteira à qual a transação pertence",
    example: "clx5p2d0b0000a7y9dh9xj2m0",
  })
  @IsString()
  walletId: string;
}
