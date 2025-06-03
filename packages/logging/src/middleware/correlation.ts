import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export interface RequestWithCorrelation extends Request {
  correlationId: string;
  startTime: number;
}

@Injectable()
export class CorrelationMiddleware implements NestMiddleware {
  use(req: RequestWithCorrelation, res: Response, next: NextFunction) {
    // Extract or generate correlation ID
    req.correlationId =
      (req.headers["x-correlation-id"] as string) ||
      (req.headers["x-request-id"] as string) ||
      uuidv4();

    // Add start time for response time calculation
    req.startTime = Date.now();

    // Set response headers
    res.setHeader("x-correlation-id", req.correlationId);
    res.setHeader("x-request-id", req.correlationId);

    next();
  }
}
