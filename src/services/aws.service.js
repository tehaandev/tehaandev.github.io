import { SNS, SNSClient, PublishCommand } from "@aws-sdk/client-sns";

const REGION = import.meta.env.VITE_AWS_SNS_REGION;
const CREDENTIALS = {
  accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
  secretAccessKey: "vE5qtZBUMBNdeBQSEXUHElys2qivkfBFA0Dg5ToK",
};

const snsClient = new SNSClient({ region: REGION, credentials: CREDENTIALS });

export default async function publishSNS(message, subject) {
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
  } catch (error) {
    console.error("Error publishing to SNS:", error);
  }
}
