import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
  ){}

  async create(createUserDto: CreateUserDto) {
    return await this.prisma.usuarios.create({
      data: createUserDto
    })
  }

  async findAll() {
    return await this.prisma.usuarios.findMany(); 
  }

  async findOne(id: number) {
    return this.prisma.usuarios.findUnique({
      where: { id: id }
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prisma.usuarios.update({
      where: { id: id},
      data: {
       ...updateUserDto,
       updated_at: new Date()  
      }
    })
  }

  async remove(id: number) {
    return await this.prisma.usuarios.delete({
      where: {id: id }
    })
  }
}
