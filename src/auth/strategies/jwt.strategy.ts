import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {AuthRepository} from "../auth.repository";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "../../usuario/entities/usuario.entity";
import {ConfigService} from "@nestjs/config";
import {PayloadInterface} from "../payload.interface";
import {MessageDto} from "../../common/message.dto";
import {JWT_SECRET} from "../../config/constants";



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly authRepository: AuthRepository,
        private readonly configService: ConfigService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'secret'
        });
    }

    async validate(payload: PayloadInterface) {
        const {nombreUsuario, email} = payload;
        const usuario = await this.authRepository.findOne({where: [{nombreUsuario: nombreUsuario}, {email: email}]});
        if(!usuario) return new UnauthorizedException(new MessageDto('credenciales erróneas'));
        return payload;
    }
}