import { ConfigService } from "@nestjs/config";
import { Params } from "nestjs-pino";

import { LoggerConfig } from "../interfaces/logger";

export function createPinoConfig(configService: ConfigService): Params {
  const config: LoggerConfig = {
    level: configService.get("LOG_LEVEL", "info"),
    service: configService.get("APP_NAME", "unknown-service"),
    environment: configService.get("NODE_ENV", "development"),
    enablePrettyPrint: configService.get("NODE_ENV") === "development",
  };

  const pinoConfig: Params = {
    pinoHttp: {
      level: config.level,

      // Production: JSON logs for Fluent Bit
      // Development: Pretty printed logs
      transport: config.enablePrettyPrint
        ? {
            target: "pino-pretty",
            options: {
              colorize: true,
              translateTime: "SYS:standard",
              ignore: "pid,hostname",
              singleLine: false,
            },
          }
        : undefined,

      // Base logger configuration
      base: {
        service: config.service,
        environment: config.environment,
        version: process.env.npm_package_version || "1.0.0",
      },

      // Custom serializers for structured logging
      serializers: {
        req: (req: any) => ({
          method: req.method,
          url: req.url,
          userAgent: req.headers["user-agent"],
          correlationId: req.correlationId,
          ip: req.ip || req.connection?.remoteAddress,
        }),
        res: (res: any) => ({
          statusCode: res.statusCode,
          responseTime: res.responseTime,
        }),
        err: (err: Error) => ({
          type: err.constructor.name,
          message: err.message,
          stack: err.stack,
        }),
      },

      // Custom log level assignment
      customLogLevel: (_req: any, res: any, err: any) => {
        if (res.statusCode >= 400 && res.statusCode < 500) return "warn";
        if (res.statusCode >= 500 || err) return "error";
        if (res.statusCode >= 300 && res.statusCode < 400) return "info";
        return "info";
      },

      // Add response time
      customSuccessMessage: (req: any, res: any) => {
        res.responseTime = Date.now() - req.startTime;
        return `${req.method} ${req.url} ${res.statusCode} - ${res.responseTime}ms`;
      },

      // Add error details
      customErrorMessage: (req: any, res: any, err: any) => {
        return `${req.method} ${req.url} ${res.statusCode} - ${err.message}`;
      },
    },
  };

  return pinoConfig;
}
