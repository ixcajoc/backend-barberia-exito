import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';
import { CategoriesModule } from './categories/categories.module';
import "dotenv/config";

@Module({
  imports: [RolesModule, CategoriesModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
