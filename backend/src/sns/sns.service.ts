import { Injectable } from '@nestjs/common';
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';

@Injectable()
export class SnsService {
  private readonly region = process.env.SNS_REGION;
  private readonly topicARN = process.env.SNS_TOPIC_ARN;
  private readonly credentials = {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
  }

  private readonly snsClient = new SNSClient({ region: this.region, credentials: this.credentials })

  async publish(subject, message) {
    try {
      const TOPIC_ARN = this.topicARN;
      const params = {
        Message: message,
        TopicArn: TOPIC_ARN,
        Subject: subject,
      };

      const publishCommand = new PublishCommand(params);
      const data = await this.snsClient.send(publishCommand);
      return 201;
    } catch (error) {
      return "Error publishing to SNS:" + error;
    }
  }
}
