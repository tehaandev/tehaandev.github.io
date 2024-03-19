import { SnsService } from './sns.service';
import { CreateSnDto } from './dto/create-sn.dto';
export declare class SnsController {
    private readonly snsService;
    constructor(snsService: SnsService);
    publish(createSnDto: CreateSnDto): Promise<string | 201>;
}
