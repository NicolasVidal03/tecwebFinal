import {IsEmail, IsNotEmpty, IsString} from "class-validator";
import {IsNotBlank} from "../../decorators/is-not-blank.decorator";

export class CreateUsuarioDto {

    @IsString()
    nombre: string;
    @IsNotBlank({message: 'esta madre no puede estar vacia, no es tu corazon'})
    nombreUsuario: string;
    @IsEmail()
    email: string;
    @IsNotBlank({message: 'esta madre no puede estar vacia, no es tu corazon'})
    password: string;

}
