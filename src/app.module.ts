import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { PlayersModule } from './players/players.module';
import { TournamentsModule } from './tournaments/tournaments.module';
import { UsuarioModule } from './usuario/usuario.module';
import { RolModule } from './rol/rol.module';

@Module({
  imports: [GamesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345',
      database: 'final',
      synchronize: true,
      autoLoadEntities: true
    }),
    PlayersModule,
    TournamentsModule,
    UsuarioModule,
    RolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
