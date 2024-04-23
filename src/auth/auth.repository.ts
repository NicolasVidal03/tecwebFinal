import {EntityRepository, Repository} from "typeorm";
import {UsuarioEntity} from "../usuario/entities/usuario.entity";

@EntityRepository(UsuarioEntity)
export class AuthRepository extends Repository<UsuarioEntity> {}