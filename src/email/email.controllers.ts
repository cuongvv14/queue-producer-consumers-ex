import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body() body: any) {
    await this.emailService.sendEmail(body);
    return { message: 'Email request added to the queue' };
  }
}

// yêu cầu POST đến http://localhost:3000/email/send với nội dung body JSON.
// {
//     "to": "recipient@example.com",
//     "subject": "Test Email",
//     "text": "This is a test email."
//   }
