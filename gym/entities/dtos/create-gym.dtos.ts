import { InputType,Field, OmitType } from "@nestjs/graphql";
import { GymEntity } from "../gym.entities";

@InputType()
export class CreateGymDto extends OmitType(GymEntity,['id'],InputType){}