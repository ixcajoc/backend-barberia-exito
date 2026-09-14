import { Module } from '@nestjs/common';
import { AppointmentStatusService } from './appointment-status.service';
import { AppointmentStatusController } from './appointment-status.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AppointmentStatusController],
  providers: [
    AppointmentStatusService,
    PrismaService
  ]
})
export class AppointmentStatusModule {}
