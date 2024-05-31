import { BullModule } from '@nestjs/bull';
import { EmailController } from './email.controllers';
import { EmailService } from './email.service';
import { Module } from '@nestjs/common';
import { EmailProcessor } from './email.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'email',
    }),
  ],
  controllers: [EmailController],
  providers: [EmailService, EmailProcessor],
})
export class EmailModule {}
