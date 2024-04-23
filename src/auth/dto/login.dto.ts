
import {IsNotBlank} from "../../decorators/is-not-blank.decorator";

export class LoginUsuarioDto {

    @IsNotBlank({message: 'esta madre no puede estar vacia, no es tu corazon'})
    nombreUsuario: string;

    @IsNotBlank({message: 'esta madre no puede estar vacia, no es tu corazon'})
    password: string;

}
