import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Player} from "./entities/player.entity";
import {Game} from "../games/entities/game.entity";

@Module({
  controllers: [PlayersController],
  providers: [PlayersService],
  imports: [TypeOrmModule.forFeature([Player, Game])]
})
export class PlayersModule {}
