import {Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe} from '@nestjs/common';
import { RolService } from './rol.service';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';

@Controller('rol')
export class RolController {
  constructor(private readonly rolService: RolService) {
  }

  @Get()
  getAll() {
    return this.rolService.getAll();
  }

  @UsePipes(new ValidationPipe({whitelist: true}))
  @Post()
  create(@Body() dto: CreateRolDto) {
    return this.rolService.create(dto);
  }

}
