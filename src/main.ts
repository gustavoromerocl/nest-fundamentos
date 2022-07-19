import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//Ejecuta un servidor desde la factory de nest
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
