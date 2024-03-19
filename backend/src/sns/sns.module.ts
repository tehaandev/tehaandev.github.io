import { Module } from '@nestjs/common';
import { SnsService } from './sns.service';
import { SnsController } from './sns.controller';

@Module({
  controllers: [SnsController],
  providers: [SnsService],
})
export class SnsModule {}
