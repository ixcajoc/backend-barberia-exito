import { Module } from '@nestjs/common';
import { BarberServicesService } from './barber-services.service';
import { BarberServicesController } from './barber-services.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BarberServicesController],
  providers: [
    BarberServicesService,
    PrismaService,
  ],
})
export class BarberServicesModule {}
