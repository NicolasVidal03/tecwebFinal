import {EntityRepository, Repository} from "typeorm";
import {UsuarioEntity} from "./entities/usuario.entity";

@EntityRepository(UsuarioEntity)
export class UsuarioRepository extends Repository<UsuarioEntity> {}