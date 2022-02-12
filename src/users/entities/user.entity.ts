import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { createHash } from 'crypto';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  userId: string;

  @Column()
  @ApiProperty()
  userName: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ nullable: true })
  @ApiProperty()
  email?: string;

  @CreateDateColumn()
  @Type(() => Date)
  @ApiProperty()
  createdAt: Date;

  @UpdateDateColumn()
  @Type(() => Date)
  @ApiProperty()
  updatedAt: Date;

  @DeleteDateColumn()
  @Type(() => Date)
  @Exclude()
  deletedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    if (this.password) {
      this.password = createHash('sha256')
        .update(this.password)
        .digest('base64');
    }
  }
}
