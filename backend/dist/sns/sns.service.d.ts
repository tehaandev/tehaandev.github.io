export declare class SnsService {
    private readonly region;
    private readonly topicARN;
    private readonly credentials;
    private readonly snsClient;
    publish(subject: any, message: any): Promise<string | 201>;
}
