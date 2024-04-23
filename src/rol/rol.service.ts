import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import {RolRepository} from "./rol.repository";
import {InjectRepository} from "@nestjs/typeorm";
import {RolEntity} from "./entities/rol.entity";

@Injectable()
export class RolService {

  constructor(
      @InjectRepository(RolEntity)
      private readonly rolRepository: RolRepository
  ) {}

  async getAll(): Promise<RolEntity[]> {
    const roles = await this.rolRepository.find();
    if(!roles.length) throw  new NotFoundException();
    return roles;
  }

  async create(dto: CreateRolDto): Promise<any> {
    //const exists = await this.rolRepository.findOne({where: {rolNombre: dto.rolNombre}});
   // if(exists) throw new BadRequestException();
    await this.rolRepository.save(dto as RolEntity);
    return 'rol creado';
  }
}
