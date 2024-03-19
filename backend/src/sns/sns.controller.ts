import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { SnsService } from './sns.service';
import { CreateSnDto } from './dto/create-sn.dto';

@Controller('sns')
export class SnsController {
  constructor(private readonly snsService: SnsService) {}

  @Post()
  publish(@Body() createSnDto: CreateSnDto) {
    return this.snsService.publish(createSnDto.subject, createSnDto.message);
  }
}
