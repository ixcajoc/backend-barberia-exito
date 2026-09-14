import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BarberServicesService } from './barber-services.service';
import { CreateBarberServiceDto } from './dto/create-barber-service.dto';
import { UpdateBarberServiceDto } from './dto/update-barber-service.dto';

@Controller('services')
export class BarberServicesController {
  constructor(private readonly barberServicesService: BarberServicesService) {}

  @Post()
  create(@Body() createBarberServiceDto: CreateBarberServiceDto) {
    return this.barberServicesService.create(createBarberServiceDto);
  }

  @Get()
  findAll() {
    return this.barberServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.barberServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBarberServiceDto: UpdateBarberServiceDto) {
    return this.barberServicesService.update(+id, updateBarberServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.barberServicesService.remove(+id);
  }
}
