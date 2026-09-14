import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './modules/roles/roles.module';
import { CategoriesModule } from './modules/categories/categories.module';
import "dotenv/config";
import { AppointmentModule } from './modules/appointments/appointment/appointment.module';
import { AppointmentDetailModule } from './modules/appointments/appointment-detail/appointment-detail.module';
import { AppointmentStatusModule } from './modules/appointments/appointment-status/appointment-status.module';

@Module({
  imports: [
    RolesModule, 
    CategoriesModule,
    AppointmentModule,
    AppointmentStatusModule,
    AppointmentDetailModule
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
