import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsService {
  constructor(
    private prisma: PrismaService
  ) {}

  async create(createProductDto: CreateProductDto) {
    return await this.prisma.productos.create({
      data: createProductDto
    });
  }

  async findAll() {
    return await this.prisma.productos.findMany(); 
  }

  async findOne(id: number) {
    return await this.prisma.productos.findUnique({
      where: { id: id } 
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.prisma.productos.update({
      where: { id: id },
      data: updateProductDto
    });
  }

  async remove(id: number) {
    return await this.prisma.productos.delete({
      where: { id: id }
    });
  }
}
