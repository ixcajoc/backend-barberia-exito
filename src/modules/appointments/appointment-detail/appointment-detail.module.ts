import { Module } from '@nestjs/common';
import { AppointmentDetailController } from './appointment-detail.controller';
import { AppointmentDetailService } from './appointment-detail.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AppointmentDetailController],
  providers: [
    AppointmentDetailService,
    PrismaService
  ]
})
export class AppointmentDetailModule {}
