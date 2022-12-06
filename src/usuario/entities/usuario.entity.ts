import {Column, PrimaryGeneratedColumn} from "typeorm";

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
}