import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RolesService {

    constructor(
        private prisma: PrismaService
    ) { }

    async createRole(role: any){
        return await this.prisma.roles.create({
            data: role
        })
    }

    async getAllRoles() {
        return await this.prisma.roles.findMany();
    }

    async getRoleById(id: number){
        return await this.prisma.roles.findUnique({
            where: {
                id: id,
            }
        })
    }

    async updateRole(id: number,role: any) {
        return await this.prisma.roles.update({
            where: {
                id: id
            },
            data: role,
        })
    }

    async deleteRole(id: number){
        return await this.prisma.roles.delete({
            where: {
                id: id,
            }
        })

    }
}
