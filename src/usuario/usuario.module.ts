import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./entities/usuario.entity";
import {RolEntity} from "../rol/entities/rol.entity";

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
  imports: [TypeOrmModule.forFeature([UsuarioEntity, RolEntity])]
})
export class UsuarioModule {}
