import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.listen(3030).then(() => {
    console.log("[Gateway] The gateway is running.");
  })
}

bootstrap();
