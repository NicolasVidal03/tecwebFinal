import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Player} from "./entities/player.entity";

@Module({
  controllers: [PlayersController],
  providers: [PlayersService],
  imports: [TypeOrmModule.forFeature([Player])]
})
export class PlayersModule {}
