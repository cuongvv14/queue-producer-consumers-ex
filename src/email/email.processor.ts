import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { Logger } from '@nestjs/common';

@Processor('email')
export class EmailProcessor {
  private readonly logger = new Logger(EmailProcessor.name);

  @Process('sendEmail')
  async handleSendEmail(job: Job) {
    this.logger.debug(
      `Processing job ${job.id} with data: ${JSON.stringify(job.data)}`,
    );
    // Logic gửi email ở đây
    // Ví dụ sử dụng nodemailer để gửi email:
    // const transporter = nodemailer.createTransport({...});
    // await transporter.sendMail({...});
    this.logger.debug(`Email sent to ${job.data.to}`);
  }
}
