import { Injectable } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Tournament} from "./entities/tournament.entity";
import {Repository} from "typeorm";

@Injectable()
export class TournamentsService {
  constructor(@InjectRepository(Tournament) private tournamentRepository: Repository<Tournament>) {
  }

  create(createTournamentDto: CreateTournamentDto) {
    return this.tournamentRepository.save(createTournamentDto);
  }

  findAll() {
    return this.tournamentRepository.find();
  }

  findOne(id: number) {
    return this.tournamentRepository.findOneBy({id});
  }

  update(id: number, updateTournamentDto: UpdateTournamentDto) {
    return this.tournamentRepository.update({id}, updateTournamentDto);
  }

  remove(id: number) {
    return this.tournamentRepository.delete({id});
  }
}
