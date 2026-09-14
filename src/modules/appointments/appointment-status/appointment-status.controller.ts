import { Body, Controller, Post, Get, Put, Delete, Param, Patch } from '@nestjs/common';
import { CreateAppointmentStatusDto } from './dto/create-appointment-status.dto';
import { AppointmentStatusService } from './appointment-status.service';
import { UpdateAppointmentStatusDto } from './dto/update-appointment-status.dto';

@Controller('appointment-status')
export class AppointmentStatusController {
    constructor(private readonly appointmentStatusService: AppointmentStatusService) {}

    @Post()
    create(@Body() status: CreateAppointmentStatusDto) {
        return this.appointmentStatusService.create(status);
    }

    @Get()
    findAll() {
        return this.appointmentStatusService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string) {
        return this.appointmentStatusService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() status: UpdateAppointmentStatusDto) {
        return this.appointmentStatusService.update(+id, status);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.appointmentStatusService.remove(+id);
    }
}
