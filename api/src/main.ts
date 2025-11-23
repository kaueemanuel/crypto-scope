import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('CryptoPulse API')
    .setDescription('API for cryptocurrency dashboard with real-time prices')
    .setVersion('1.0')
    .addTag('prices', 'Cryptocurrency price endpoints')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`API running on port ${port}`);
  console.log(`Swagger available at: http://localhost:${port}/api`);
}

bootstrap();
