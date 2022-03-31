import { InputType, PartialType } from "@nestjs/graphql";
import { GymEntity } from "../gym.entities";
import { UpdateGymDto } from "./update-gym.dtos";

@InputType()
export class GetGymDto extends PartialType(UpdateGymDto){}