import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../../usuario/entities/usuario.entity";
import {RolNombre} from "../rol.enum";

@Entity({name: 'rol'})
export class RolEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: false, unique: true})
    rolNombre: RolNombre;

    @ManyToMany(type => UsuarioEntity, usuario => usuario.roles)
    usuarios: UsuarioEntity[];
}