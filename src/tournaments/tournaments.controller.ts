import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { TournamentsService } from './tournaments.service';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import {RolDecorator} from "../decorators/rol.decorator";
import {RolNombre} from "../rol/rol.enum";
import {JwtAuthGuard} from "../guards/jwt.guard";
import {RolesGuard} from "../guards/rol.guard";

@Controller('tournaments')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @RolDecorator(RolNombre.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(@Body() createTournamentDto: CreateTournamentDto) {
    return this.tournamentsService.create(createTournamentDto);
  }

  @RolDecorator(RolNombre.ADMIN, RolNombre.USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  findAll() {
    return this.tournamentsService.findAll();
  }

  @RolDecorator(RolNombre.ADMIN, RolNombre.USER)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tournamentsService.findOne(+id);
  }

  @RolDecorator(RolNombre.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTournamentDto: UpdateTournamentDto) {
    return this.tournamentsService.update(+id, updateTournamentDto);
  }

  @RolDecorator(RolNombre.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tournamentsService.remove(+id);
  }
}
