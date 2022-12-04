import {Game} from "../../games/entities/game.entity";

export class CreatePlayerDto {
    nombre: string;
    edad: number;
    sueldo: number;
    idGame: number;
    game: Game;
}
