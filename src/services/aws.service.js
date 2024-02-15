import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

const REGION = import.meta.env.VITE_AWS_SNS_REGION;
const CREDENTIALS = {
  accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
  secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
};

const snsClient = new SNSClient({ region: REGION, credentials: CREDENTIALS });

export default async function publishSNS(subject, message) {
  try {
    const TOPIC_ARN = import.meta.env.VITE_AWS_SNS_TOPIC_ARN;
    const params = {
      Message: message,
      TopicArn: TOPIC_ARN,
      Subject: subject,
    };

    const publishCommand = new PublishCommand(params);
    const data = await snsClient.send(publishCommand);
    console.log(`Message published successfully: ${data.MessageId}`);
    return 201;
  } catch (error) {
    console.error("Error publishing to SNS:", error);
  }
}
