import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Game} from "../../games/entities/game.entity";

@Entity()
export class Tournament {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombreTour: string;
    @Column()
    premio: number;
    @Column()
    localidad: string;
    @Column()
    fecha: number;
    @Column()
    fechaFin: number;
    @ManyToOne(type => Game, game => game.titulo)
    juegoTour: number;
}
