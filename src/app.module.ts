import { BullModule } from '@nestjs/bull';
import { EmailModule } from './email/email.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    EmailModule,
  ],
  controllers: [],
  providers: [EmailModule],
})
export class AppModule {}
