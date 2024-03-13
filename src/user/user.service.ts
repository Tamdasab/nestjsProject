import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  findAllUsers(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async createUser(userData: Partial<Users>): Promise<Users> {
    const newUser = this.userRepository.create(userData);
    return await this.userRepository.save(newUser);
  }
}
