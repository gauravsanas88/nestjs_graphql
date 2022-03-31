import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateGymDto } from './entities/dtos/create-gym.dtos';
import { UpdateGymDto } from './entities/dtos/update-gym.dtos';
import { GymEntity } from './entities/gym.entities';

@Injectable()
export class GymService {
    constructor(private readonly databaseService: DatabaseService){}
    async getAllGyms(): Promise<GymEntity[]>{
        return await this.databaseService.gym.findMany();
    }

    async createGym(gym: CreateGymDto): Promise<GymEntity> {
        return await this.databaseService.gym.create({ 
            data: {
                ... gym,
            }
        })
    }

    async updateGym(id: number, gym: UpdateGymDto): Promise<GymEntity>{
        return await this.databaseService.gym.update({
            where: {id},
            data: {
                ... gym
            }
        })
    }

    async getGym(id: number): Promise<GymEntity>{
        return await this.databaseService.gym.findFirst({
            where: {id}
        })
    }
}
