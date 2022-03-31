import { Field, InputType, PartialType } from "@nestjs/graphql";
import { CreateGymDto } from "./create-gym.dtos";

@InputType()
export class UpdateGymDto extends PartialType(CreateGymDto){}