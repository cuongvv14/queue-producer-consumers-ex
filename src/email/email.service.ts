import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class EmailService {
  constructor(@InjectQueue('email') private readonly emailQueue: Queue) {}

  async sendEmail(data: any) {
    await this.emailQueue.add('sendEmail', data);
  }
}