import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategoriesService {

  constructor(private prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    return await this.prisma.categorias.create({
      data: createCategoryDto
    });
  }

  async findAll() {
    return await this.prisma.categorias.findMany();
  }

  async findOne(id: number) {
    const category = await this.prisma.categorias.findUnique({
      where: {
        id: id
      }
    });
    if(!category) {
      return new NotFoundException(`Category with id ${id} not found`);
    }
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await this.prisma.categorias.update({
      where: {
        id: id
      },
      data: updateCategoryDto
    })

  }

  async remove(id: number) {
    await this.prisma.categorias.delete({
      where: {
        id: id
      }
    })
  }

}
