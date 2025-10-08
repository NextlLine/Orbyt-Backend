import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/repositories/user.repository';

export class UserResponseDto {
  @ApiProperty({
    description: "User's full name",
    example: "John Doe",
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: "User's identification document (e.g., CPF or SSN)",
    example: "12345678900",
  })
  @IsString()
  doc: string;

  @ApiProperty({
    description: "User's email address",
    example: "john.doe@email.com",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "Hashed password (hidden in response)",
    example: "********",
  })
  @IsString()
  hash: string;

  constructor(user: User) {
    this.name = user.name;
    this.doc = "********" + user.doc.slice(-3); 
    this.email = user.email;
    this.hash = "********"; 
  }
}
