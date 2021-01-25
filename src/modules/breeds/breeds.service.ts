import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DogBreed } from 'src/database/entities/dogBreed.entity';
import { Repository } from 'typeorm';
import { CreateBreed } from './dtos/create.dto';

@Injectable()
export class BreedsService {
  constructor(
    @InjectRepository(DogBreed)
    private breedRepository: Repository<DogBreed>,
  ) {}

  findAll(): Promise<DogBreed[]> {
    return this.breedRepository.find();
  }

  create(dto: CreateBreed) {
    this.breedRepository.insert({ name: dto.name, pictureUl: dto.pictureUl });
  }
}
