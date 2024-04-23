import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  UnauthorizedException
} from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import {CreatePlayerDto} from "../players/dto/create-player.dto";
import {PlayersService} from "../players/players.service";
import {JwtAuthGuard} from "../guards/jwt.guard";
import {RolesGuard} from "../guards/rol.guard";
import {RolNombre} from "../rol/rol.enum";
import {RolDecorator} from "../decorators/rol.decorator";

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService,
              private readonly playersService: PlayersService) {}

  @RolDecorator(RolNombre.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    return this.gamesService.create(createGameDto);
  }

  @RolDecorator(RolNombre.ADMIN, RolNombre.USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  findAll() {
    return this.gamesService.findAll();
  }

  @RolDecorator(RolNombre.ADMIN, RolNombre.USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gamesService.findOne(+id);
  }

  @RolDecorator(RolNombre.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gamesService.update(+id, updateGameDto);
  }

  @RolDecorator(RolNombre.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gamesService.remove(+id);
  }

  @RolDecorator(RolNombre.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('/:id/player')
  async createPlayer(
      @Param('id', ParseIntPipe) id: number,
      @Body() body: CreatePlayerDto,
  ){
    return this.playersService.savePlayer(id, body);
  }

}
