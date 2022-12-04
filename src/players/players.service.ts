import {Injectable, NotFoundException} from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Player} from "./entities/player.entity";
import {Repository} from "typeorm";
import {Game} from "../games/entities/game.entity";

@Injectable()
export class PlayersService {
  constructor(@InjectRepository(Player) private playerRepository: Repository<Player>,
              @InjectRepository(Game) private gameRepository: Repository<Game>) {
  }

  create(createPlayerDto: any) {
    return this.playerRepository.save(createPlayerDto);
  }

  findAll() {
    return this.playerRepository.find( { relations: { game: true } } );
  }

  findOne(id: number) {
    return this.playerRepository.findOne({ where:{id}, relations:{ game: true } } );
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return this.playerRepository.update({id}, {...updatePlayerDto});
  }

  remove(id: number) {
    return this.playerRepository.delete({id});
  }

  async savePlayer(id: number, body: CreatePlayerDto) {
    const game = await this.gameRepository.findOneBy({id});
    console.log(game, id);
    if(game) {
      const player = this.playerRepository.create(body);
      player.game = game;
      await this.playerRepository.save(player);
      return player;
    }
    throw new NotFoundException(`No se encontro el juego ${id}`)
  }


}
