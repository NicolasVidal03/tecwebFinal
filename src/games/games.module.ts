import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Game} from "./entities/game.entity";
import {Player} from "../players/entities/player.entity";
import {PlayersService} from "../players/players.service";

@Module({
  controllers: [GamesController],
  providers: [GamesService, PlayersService],
  imports: [TypeOrmModule.forFeature([Game, Player])]
})
export class GamesModule {}
