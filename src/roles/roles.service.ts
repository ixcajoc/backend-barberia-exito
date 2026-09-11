import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';

@Injectable()
export class RolesService {

    constructor(
        private prisma: PrismaService
    ) { }

    async createRole(role: CreateRolDto) {
        const rol =  await this.prisma.roles.create({
            data: role
        })

        if(!rol){
            throw new InternalServerErrorException('Error al crear el rol, por favor intente nuevamente');
        }

        return rol;
    }

    async getAllRoles() {
        return await this.prisma.roles.findMany();
    }

    async getRoleById(id: number){
        const role =  await this.prisma.roles.findUnique({
            where: {
                id: id,
            }
        })
        if(!role){
            return new NotFoundException('Rol no encontrado');
        }

        return role;
    }

    // i dont return an error because if the role is not updated, it will throw an error automatically
    async updateRole(id: number,role: UpdateRolDto) {
        return await this.prisma.roles.update({
            where: {
                id: id
            },
            data: role,
        })

    }

    // i dont return anerror because if the role is not deleted, it will throw an error automatically
    async deleteRole(id: number){
        return await this.prisma.roles.delete({
            where: {
                id: id,
            }
        })

    }
}
