import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateAppointmentDetailDto } from './dto/create-appointment-detail.dto';
import { UpdateAppointmentDetailDto } from './dto/update-appointment-detail.dto';

@Injectable()
export class AppointmentDetailService {

    constructor(
        private prisma: PrismaService,
    ){}

    async create(detail: CreateAppointmentDetailDto){
        return await this.prisma.detalle_cita.create({
            data: detail
        });
    }

    async findAll(){
        return await this.prisma.detalle_cita.findMany();
    }

    async findOne(id: number){
        const detail = await this.prisma.detalle_cita.findUnique({
            where: { id: id }
        });

        if(!detail){
            return new NotFoundException(`Detalle de cita con el id ${id} no encontrado`);
        }
        return detail;
    }

    async update(id: number, detail: UpdateAppointmentDetailDto){
        return await this.prisma.detalle_cita.update({
            where: { id: id },
            data: detail
        })
    }

    async remove(id: number) {
        return await this.prisma.detalle_cita.delete({
            where: {id: id}
        });
    }
}
