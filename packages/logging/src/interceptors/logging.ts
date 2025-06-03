import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'

import { LOG_CONTEXT_KEY, LogContextOptions } from '../decorators/logContext'

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name)

  constructor(private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const logOptions = this.reflector.get<LogContextOptions>(LOG_CONTEXT_KEY, context.getHandler())

    if (!logOptions) {
      return next.handle()
    }

    const request = context.switchToHttp().getRequest()
    const { method, url, correlationId } = request
    const className = context.getClass().name
    const methodName = context.getHandler().name
    const operation = logOptions.operation || `${className}.${methodName}`

    const startTime = Date.now()

    this.logger.log({
      message: `Starting operation: ${operation}`,
      correlationId,
      operation,
      method,
      url,
    })

    return next.handle().pipe(
      tap(result => {
        const duration = Date.now() - startTime
        this.logger.log({
          message: `Completed operation: ${operation}`,
          correlationId,
          operation,
          duration,
          success: true,
          ...(logOptions.includeResult && { result }),
        })
      }),
      catchError(error => {
        const duration = Date.now() - startTime
        this.logger.error({
          message: `Failed operation: ${operation}`,
          correlationId,
          operation,
          duration,
          error: error.message,
          stack: error.stack,
        })
        throw error
      })
    )
  }
}
