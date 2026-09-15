import { Injectable } from '@nestjs/common';
import { CreateBarberServiceDto } from './dto/create-barber-service.dto';
import { UpdateBarberServiceDto } from './dto/update-barber-service.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BarberServicesService {

  constructor(
    private prisma: PrismaService,
  ) {}

  async create(createBarberServiceDto: CreateBarberServiceDto) {
    return await this.prisma.servicios.create({
      data: createBarberServiceDto
    })
  }

  async findAll() {
    return await this.prisma.servicios.findMany()
  }

  async findOne(id: number) {
    return await this.prisma.servicios.findUnique({
      where: { id:id }
    })
  }

  async update(id: number, updateBarberServiceDto: UpdateBarberServiceDto) {
    return await this.prisma.servicios.update({
      where: {id: id},
      data: updateBarberServiceDto
    }) 
  }

  async remove(id: number) {
    return await this.prisma.servicios.delete({
      where: {id: id}
    })
  }
}
