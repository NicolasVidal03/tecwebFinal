import {Column, Entity, ManyToMany, PrimaryGeneratedColumn, JoinTable, BeforeInsert, BeforeUpdate} from "typeorm";
import {RolEntity} from "../../rol/entities/rol.entity";
import {hash} from "bcryptjs";

@Entity({name: 'usuario'})
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: true})
    nombre: string;
    @Column({nullable: false, unique: true})
    nombreUsuario: string;
    @Column({nullable: false, unique: true})
    email: string;
    @Column({nullable: false})
    password: string;

    @ManyToMany(type => RolEntity, rol => rol.usuarios, {eager: true})
    @JoinTable({
        name: 'usuario_rol',
        joinColumn: {name: 'usuario_id'},
        inverseJoinColumn: {name: 'rol_id'}
    })
    roles: RolEntity[];

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(){
        if(!this.password) return;
        this.password = await hash(this.password, 10);
    }
}