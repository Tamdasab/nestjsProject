import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  createUser(name: string): Promise<User> {
    const existingUser = this.userRepository.find({
      where: { name: name },
    });
    if (existingUser) {
      throw new BadRequestException(
        `User with username ${name} already exists`,
      );
    }
    const user = new User();
    this.userRepository.save(user);

    return Promise.resolve(user);
  }
}
