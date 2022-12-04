import {Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe} from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import {CreatePlayerDto} from "../players/dto/create-player.dto";
import {PlayersService} from "../players/players.service";

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService,
              private readonly playersService: PlayersService) {}

  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    return this.gamesService.create(createGameDto);
  }

  @Get()
  findAll() {
    return this.gamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gamesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gamesService.update(+id, updateGameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gamesService.remove(+id);
  }

  @Post('/:id/player')
  async createPlayer(
      @Param('id', ParseIntPipe) id: number,
      @Body() body: CreatePlayerDto,
  ){
    return this.playersService.savePlayer(id, body);
  }

}
