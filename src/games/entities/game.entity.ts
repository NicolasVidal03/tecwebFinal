import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Player} from "../../players/entities/player.entity";
import {Tournament} from "../../tournaments/entities/tournament.entity";

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
    @OneToMany(type => Player, player => player.game)
    players: Player[];
    @OneToMany(type => Tournament, tournament => tournament.game)
    tournaments: Tournament[];
}
