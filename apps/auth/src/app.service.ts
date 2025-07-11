import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    this.logger.log("Generating hello message");
    return "🔐 Auth Service is running with structured logging!";
  }
}
