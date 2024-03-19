import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SnsModule } from './sns/sns.module';

@Module({
  imports: [ConfigModule.forRoot(), SnsModule],
})
export class AppModule { }
