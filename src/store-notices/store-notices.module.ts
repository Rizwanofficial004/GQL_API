import { Module } from '@nestjs/common';
import { StoreNoticesResolver } from './store-notices.resolver';
import { StoreNoticesService } from './store-notices.service';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { UserSchema } from 'src/users/users.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[ MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [StoreNoticesResolver, StoreNoticesService, UsersService],
})
export class StoreNoticesModule {}
