import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType() 
export class GymEntity{
    @Field( () => Int)
    id: number;

    @Field( () => String)
    name: string;

    @Field( () => String )
    address: string

    @Field( () => Boolean)
    YogaClasses: boolean

    @Field(()=>String)
    owner: string

    
}