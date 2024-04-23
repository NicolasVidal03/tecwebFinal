import { Module } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolController } from './rol.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {RolEntity} from "./entities/rol.entity";
import {UsuarioEntity} from "../usuario/entities/usuario.entity";

@Module({
  controllers: [RolController],
  providers: [RolService],
  imports: [TypeOrmModule.forFeature([RolEntity])]
})
export class RolModule {}
