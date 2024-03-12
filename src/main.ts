import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://13.60.12.139',
      'https://finlay-psi.vercel.app',
      'https://finlay-backend.vercel.app',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());
  // app.enableCors();
  console.log('hhhh');
  const port = process.env.PORT || 3000;
  await app.listen(port); // 3000
}
bootstrap();
