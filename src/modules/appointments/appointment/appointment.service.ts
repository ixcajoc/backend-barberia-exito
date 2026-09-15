import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentService {
    constructor(
        private prisma: PrismaService,
    ){}

    async create(createAppointmentDto: CreateAppointmentDto){
        return await this.prisma.citas.create({
            data: createAppointmentDto
        });
    }

    async findAll(){
        return await this.prisma.citas.findMany();
    }

    async findOne(id: number){
        const appointment = await this.prisma.citas.findUnique({
            where: { id: id }
        });
        if(!appointment){
            return new NotFoundException(`Cita con el id ${id} no se encuentra`);
        }

        return appointment;
    }

    async update(id: number, updateAppointmentDto: UpdateAppointmentDto){
        return this.prisma.citas.update({
            where: { id: id},
            data: {
                ...updateAppointmentDto,
                created_at: new Date()
            }
        })
    }

    async remove(id: number){
        return await this.prisma.citas.delete({
            where: { id: id }
        })

    }
}
