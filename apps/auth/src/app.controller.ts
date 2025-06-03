import { LogContext } from "@ecommerce/logging";
import { Controller, Get, Logger } from "@nestjs/common";

import { AppService } from "./app.service";

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Get()
  @LogContext({ operation: "get-hello", includeResult: true })
  getHello(): string {
    this.logger.log("Hello endpoint called");
    return this.appService.getHello();
  }

  @Get("health")
  @LogContext({ operation: "health-check" })
  getHealth() {
    this.logger.log("Health check requested");
    return {
      status: "ok",
      service: "auth-service",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }
}
