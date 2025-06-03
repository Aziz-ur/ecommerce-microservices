import { EcommerceLoggingModule } from '@ecommerce/logging'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    EcommerceLoggingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
