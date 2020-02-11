import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly userRepository: Model<User>
  ) {}

  async findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ email });
  }

  async findAll(query: User): Promise<User[]> {
    return this.userRepository.find(query);
  }

  async create(data: User): Promise<User> {
    return this.userRepository.create(data);
  }
}
