import { PrimaryGeneratedColumn, BaseEntity, UpdateDateColumn } from "typeorm";
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Base extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  createdAt: number;
  
  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: number;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  deletedAt: number;
}