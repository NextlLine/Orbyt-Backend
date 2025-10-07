import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

export type User = {
    id: string,
    email: string,
    hash: string,
    name: string,
    activatedAt: Date | null,
    doc: string,

}

export interface UserRepository {
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findByDoc(doc: string): Promise<User | null>;
    create(newUser: Omit<User, "id">): Promise<User | null>;
    update(id: string, updateUser: Partial<User>): Promise<User | null>;
    delete(id: string): Promise<User | null>;
}

@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private readonly prisma: PrismaClient) {}
    
    async findById(id: string): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { id } });
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.prisma.user.findUnique({ where: { email } });
    }

     findByDoc(doc: string): Promise<User | null> {
        return this.prisma.user.findUnique({ where: {doc} });
    }

    async create(newUser: Omit<User, "id">): Promise<User | null> {
        return this.prisma.user.create({ data: { ...newUser } });
    }

    async update(id: string, updateUser: Partial<User>): Promise<User | null> {
        return this.prisma.user.update({
            where: { id },
            data:{ ...updateUser }
        });
    }

    async delete(id: string): Promise<User | null> {
        return this.prisma.user.delete({ where: { id }});
    }

}