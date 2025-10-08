import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { UserRepository } from "src/repositories/user.repository";
import { SignInDtoRequest } from "../dto/singin.request.dto";
import { SignUpRequestDto } from "../dto/signup.request.dto";
import bcrypt from "bcrypt";
import { SignUpResponseDto } from "../dto/sighup.response.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) { }

  async signUp(newUserDto: SignUpRequestDto) {
    const emailExisting = await this.userRepository.findByEmail(newUserDto.email);
    if (emailExisting) throw new ConflictException("Email already in use");

    const docExisting = await this.userRepository.findByDoc(newUserDto.doc);
    if (docExisting) throw new ConflictException("Doc already in use");

    const saltOrRounds = 10;
    const passHash = bcrypt.hashSync(newUserDto.hash, saltOrRounds);

    const user = await this.userRepository.create({
      ...newUserDto,
      hash: passHash,
      activatedAt: null,
    });

    if (!user) throw new ConflictException("Failed to create user");

    return {
      message: "User successfully registered",
      data: new SignUpResponseDto(user),
    };
  }

  async signIn(signinUserDto: SignInDtoRequest) {
    const existing = await this.userRepository.findByEmail(signinUserDto.email);

    if (!existing) throw new NotFoundException("User not found");
    if (existing.activatedAt === null) throw new UnauthorizedException("User not authorized or not activated");

    const passwordMatches = bcrypt.compareSync(signinUserDto.hash, existing.hash);

    if (!passwordMatches) throw new UnauthorizedException("Incorrect password");

    const payload = { sub: existing.id, uername: existing.email }

    return {
      acces_taken: await this.jwtService.signAsync(payload),
    };
  }
}
