import { SetMetadata } from '@nestjs/common'

export const LOG_CONTEXT_KEY = 'logContext'

export interface LogContextOptions {
  operation?: string
  sensitive?: boolean
  includeArgs?: boolean
  includeResult?: boolean
}

export const LogContext = (options: LogContextOptions = {}) => SetMetadata(LOG_CONTEXT_KEY, options)
