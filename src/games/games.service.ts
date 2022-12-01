import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Game} from "./entities/game.entity";
import {Repository} from "typeorm";

@Injectable()
export class GamesService {
  constructor(@InjectRepository(Game) private gameRepository: Repository<Game>) {
  }

  create(createGameDto: CreateGameDto) {
    return this.gameRepository.save(createGameDto);
  }

  findAll() {
    return this.gameRepository.find();
  }

  findOne(id: number) {
    return this.gameRepository.findOneBy({id});
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return this.gameRepository.update({id}, updateGameDto);
  }

  remove(id: number) {
    return this.gameRepository.delete({id});
  }
}
