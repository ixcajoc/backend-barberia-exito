import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //remove properties that are not in the DTO
    forbidNonWhitelisted: true, // show an error if there are properties that are not in the DTO
    transform: true //transform the request body to the DTO class
  }
  ));
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
