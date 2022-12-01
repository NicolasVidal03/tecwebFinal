import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Game} from "../../games/entities/game.entity";

@Entity()
export class Player {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    edad: number;
    @Column()
    sueldo: number;
    @ManyToOne(type => Game, game => game.titulo)
    juego: number;
}
