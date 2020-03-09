import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }
  users: CreateUserDto[] = [];
  create(user: CreateUserDto) {
    this.users.push(user);
  }
  findAll() {
    return this.users;
  }
}
