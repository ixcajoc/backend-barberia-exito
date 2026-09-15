import { Controller, Post, Patch, Delete, Get, Body, Param } from '@nestjs/common';
import { AppointmentDetailService } from './appointment-detail.service';
import { CreateAppointmentDetailDto } from './dto/create-appointment-detail.dto';
import { UpdateAppointmentDetailDto } from './dto/update-appointment-detail.dto';

@Controller('appointment-detail')
export class AppointmentDetailController {

    constructor(
        private appointmentDetailService: AppointmentDetailService,
    ){}

    @Post()
    create(@Body() detail: CreateAppointmentDetailDto){
        return this.appointmentDetailService.create(detail);
    }

    @Get()
    findAll(){
        return this.appointmentDetailService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.appointmentDetailService.findOne(+id)
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() detail: UpdateAppointmentDetailDto){
        return this.appointmentDetailService.update(+id, detail);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.appointmentDetailService.remove(+id);
    }
}
