import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "../usuario/entities/usuario.entity";
import {RolEntity} from "../rol/entities/rol.entity";
import {AuthRepository} from "./auth.repository";
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {PassportModule} from "@nestjs/passport";
import {JwtStrategy} from "./strategies/jwt.strategy";
import {JWT_SECRET} from "../config/constants";

@Module({
  controllers: [AuthController],
  providers: [AuthService, ConfigService, JwtStrategy],
  imports: [
    TypeOrmModule.forFeature([UsuarioEntity, RolEntity, AuthRepository]),
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: 'secret',
        signOptions: {
          expiresIn: 7200
        }
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [PassportModule, JwtStrategy]
})
export class AuthModule {}
