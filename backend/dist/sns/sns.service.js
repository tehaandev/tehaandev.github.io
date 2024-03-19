"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnsService = void 0;
const common_1 = require("@nestjs/common");
const client_sns_1 = require("@aws-sdk/client-sns");
let SnsService = class SnsService {
    constructor() {
        this.region = process.env.SNS_REGION;
        this.topicARN = process.env.SNS_TOPIC_ARN;
        this.credentials = {
            accessKeyId: process.env.ACCESS_KEY,
            secretAccessKey: process.env.SECRET_ACCESS_KEY
        };
        this.snsClient = new client_sns_1.SNSClient({ region: this.region, credentials: this.credentials });
    }
    async publish(subject, message) {
        try {
            const TOPIC_ARN = this.topicARN;
            const params = {
                Message: message,
                TopicArn: TOPIC_ARN,
                Subject: subject,
            };
            const publishCommand = new client_sns_1.PublishCommand(params);
            const data = await this.snsClient.send(publishCommand);
            return 201;
        }
        catch (error) {
            return "Error publishing to SNS:" + error;
        }
    }
};
exports.SnsService = SnsService;
exports.SnsService = SnsService = __decorate([
    (0, common_1.Injectable)()
], SnsService);
//# sourceMappingURL=sns.service.js.map