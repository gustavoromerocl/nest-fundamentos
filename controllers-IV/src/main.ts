import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* https://docs.nestjs.com/techniques/validation */
  // Dependencias: class transformer - class validator
  app.useGlobalPipes(new ValidationPipe()); //

  await app.listen(3000);
}
bootstrap();
