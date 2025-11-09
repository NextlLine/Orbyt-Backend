import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { User } from "src/infra/model/model";

export abstract class UserRepository {
    abstract findById(id: string): Promise<User | null>;
    abstract findByEmail(email: string): Promise<User | null>;
    abstract findByDoc(doc: string): Promise<User | null>;
    abstract create(data: Omit<User, "id">): Promise<User>;
    abstract update(id: string, updateUser: Partial<User>): Promise<User>;
    abstract delete(id: string): Promise<void>;
}

@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private readonly prisma: PrismaClient) { }

    async findById(id: string): Promise<User | null> {
        return await this.prisma.user.findUnique({ where: { id } });
    }
    async findByEmail(email: string): Promise<User | null> {
        return await this.prisma.user.findUnique({ where: { email } });
    }
    async findByDoc(doc: string): Promise<User | null> {
        return await this.prisma.user.findUnique({ where: { doc } });
    }
    async create(data: Omit<User, "id">): Promise<User> {
        return await this.prisma.user.create({ data: { ...data } });
    }
    async update(id: string, data: Partial<User>): Promise<User> {
        return await this.prisma.user.update({
            where: { id },
            data: { ...data }
        });
    }
    async delete(id: string): Promise<void> {
        await this.prisma.user.delete({ where: { id } });
    }
}