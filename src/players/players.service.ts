import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Player} from "./entities/player.entity";
import {Repository} from "typeorm";

@Injectable()
export class PlayersService {
  constructor(@InjectRepository(Player) private playerRepository: Repository<Player>) {
  }

  create(createPlayerDto: CreatePlayerDto) {
    return this.playerRepository.save(createPlayerDto);
  }

  findAll() {
    return this.playerRepository.find();
  }

  findOne(id: number) {
    return this.playerRepository.findBy({id});
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return this.playerRepository.update({id}, updatePlayerDto);
  }

  remove(id: number) {
    return this.playerRepository.delete({id});
  }
}
