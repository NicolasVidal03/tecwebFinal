import {BadRequestException, Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {RolEntity} from "../rol/entities/rol.entity";
import {RolRepository} from "../rol/rol.repository";
import {UsuarioEntity} from "./entities/usuario.entity";
import {UsuarioRepository} from "./usuario.repository";
import {CreateRolDto} from "../rol/dto/create-rol.dto";
import {MessageDto} from "../common/message.dto";
import {RolNombre} from "../rol/rol.enum";

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(RolEntity)
        private readonly rolRepository: RolRepository,
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: UsuarioRepository
    ) {}

    async getAll(): Promise<UsuarioEntity[]> {
        const usuarios = await this.usuarioRepository.find();
        if(!usuarios.length) throw  new NotFoundException(new MessageDto('no hay usaurios en la lista'));
        return usuarios;
    }

    async create(dto: CreateUsuarioDto): Promise<any> {
        const {nombreUsuario, email} = dto;
        const exists = await this.usuarioRepository.findOne({where: [{nombreUsuario: nombreUsuario}, {email: email}]});
        if(exists) throw new BadRequestException(new MessageDto('ese usuario ya existe'));
        const rolAdmin = await this.rolRepository.findOne({where: {rolNombre: RolNombre.ADMIN}});
        const rolUser = await this.rolRepository.findOne({where: {rolNombre: RolNombre.USER}});
        if(!rolAdmin || !rolUser) throw new InternalServerErrorException(new MessageDto('los roles aun no han sido creados xd'));
        const admin = this.usuarioRepository.create(dto);
        admin.roles = [rolAdmin, rolUser];
        await this.usuarioRepository.save(admin);
        return new MessageDto('gigachad creado');
    }

}
