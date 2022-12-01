import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Game {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    titulo: string;
    @Column()
    lanzamiento: number;
    @Column()
    genero: string;
    @Column()
    calificacion: number;
}
