import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());
  // app.enableCors();
console.log('hhhh')
  const port = process.env.PORT || 3000;
  await app.listen(port); // 3000
}
bootstrap();
