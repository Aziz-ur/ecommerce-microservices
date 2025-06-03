export interface LoggerContext {
  correlationId?: string
  userId?: string
  service: string
  method?: string
  url?: string
  statusCode?: number
  responseTime?: number
  error?: Error
  [key: string]: any
}

export interface LoggerConfig {
  level: string
  service: string
  environment: string
  enablePrettyPrint: boolean
}
