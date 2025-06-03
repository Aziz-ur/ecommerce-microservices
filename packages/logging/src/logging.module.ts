import { Global, MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { LoggerModule } from "nestjs-pino";

import { createPinoConfig } from "./config/pino";
import { LoggingInterceptor } from "./interceptors/logging";
import { CorrelationMiddleware } from "./middleware/correlation";

@Global()
@Module({
  imports: [
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: createPinoConfig,
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
  exports: [LoggerModule],
})
export class EcommerceLoggingModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorrelationMiddleware).forRoutes("*");
  }
}
