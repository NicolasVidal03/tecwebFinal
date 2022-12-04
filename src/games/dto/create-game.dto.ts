import { Tournament } from "src/tournaments/entities/tournament.entity";
import {Player} from "../../players/entities/player.entity";

export class CreateGameDto {
    titulo: string;
    lanzamiento: number;
    genero: string;
    calificacion: number;
    players: Player[];
    tournaments: Tournament[];
}
