import {Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  getAll() {
    return this.usuarioService.getAll();
  }

  @UsePipes(new ValidationPipe({whitelist: true}))
  @Post()
  create(@Body() dto: CreateUsuarioDto) {
    return this.usuarioService.create(dto);
  }

}
