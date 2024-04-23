import {Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards} from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import {RolDecorator} from "../decorators/rol.decorator";
import {RolNombre} from "../rol/rol.enum";
import {JwtAuthGuard} from "../guards/jwt.guard";
import {RolesGuard} from "../guards/rol.guard";

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @RolDecorator(RolNombre.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(@Body() createPlayerDto: any) {
    return this.playersService.create(createPlayerDto);
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

  @RolDecorator(RolNombre.ADMIN, RolNombre.USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  findAll() {
    return this.playersService.findAll();
  }

  @RolDecorator(RolNombre.ADMIN, RolNombre.USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playersService.findOne(+id);
  }

  @RolDecorator(RolNombre.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playersService.update(+id, updatePlayerDto);
  }

  @RolDecorator(RolNombre.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playersService.remove(+id);
  }
}
