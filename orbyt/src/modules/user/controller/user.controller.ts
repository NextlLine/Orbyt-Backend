import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/util/jwt.guard";
import { Request } from '@nestjs/common';
import { UserService } from "../service/user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @UseGuards(AuthGuard)
    @Get()
    async findAllWallets(@Request() req) {
        return await this.userService.getBasicUser(req.user.sub);
    }

}