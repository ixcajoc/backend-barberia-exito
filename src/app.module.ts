import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './modules/roles/roles.module';
import { CategoriesModule } from './modules/categories/categories.module';
import "dotenv/config";
import { AppointmentModule } from './modules/appointments/appointment/appointment.module';
import { AppointmentDetailModule } from './modules/appointments/appointment-detail/appointment-detail.module';
import { AppointmentStatusModule } from './modules/appointments/appointment-status/appointment-status.module';
import { ProductsModule } from './modules/products/products.module';
import { BarberServicesModule } from './modules/barber-services/barber-services.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    RolesModule, 
    CategoriesModule,
    AppointmentModule,
    AppointmentStatusModule,
    AppointmentDetailModule,
    ProductsModule,
    BarberServicesModule,
    UsersModule,
    
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
