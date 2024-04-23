import {RolEntity} from "./entities/rol.entity";
import {EntityRepository, Repository} from "typeorm";

@EntityRepository(RolEntity)
export class RolRepository extends Repository<RolEntity> {}