import { Body, Controller, Get, Post } from '@nestjs/common';
import { DogBreed } from 'src/database/entities/dogBreed.entity';
import { BreedsService } from './breeds.service';
import { CreateBreed } from './dtos/create.dto';

@Controller('breeds')
export class BreedsController {
  constructor(private readonly breedsService: BreedsService) {}

  @Get()
  findAll(): Promise<DogBreed[]> {
    return this.breedsService.findAll();
  }

  @Post()
  create(@Body() dto: CreateBreed) {
    this.breedsService.create(dto);
  }
}
