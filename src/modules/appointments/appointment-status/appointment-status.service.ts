import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateAppointmentStatusDto } from './dto/create-appointment-status.dto';
import { UpdateAppointmentStatusDto } from './dto/update-appointment-status.dto';

@Injectable()
export class AppointmentStatusService {

    constructor(
        private prisma: PrismaService
    ) {}

    async create(status: CreateAppointmentStatusDto) {
        return await this.prisma.estado_cita.create({
            data: status
        })
    }

    async findAll() {
        return await this.prisma.estado_cita.findMany();
    }

    async findOne(id: number) {
        const status = await this.prisma.estado_cita.findUnique({
            where: {
                id: id
            }
        })

        if(!status) {
            return new NotFoundException(`No se encontró el estado de cita con id ${id}`);
        }

        return status;
    }

    async update(id: number, status: UpdateAppointmentStatusDto) {
        return await this.prisma.estado_cita.update({
            where: {
                id: id
            },
            data: status
        })
    }

    async remove(id: number) {
        return await this.prisma.estado_cita.delete({
            where:{
                id: id
            }
        })
    }
    
}
