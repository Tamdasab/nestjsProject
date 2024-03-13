import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('users')
  getUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Post()
  async create(@Body() payload: { name: string }): Promise<User> {
    if (!payload.name) {
      throw new BadRequestException('name is required');
    }
    return await this.userService.createUser(payload.name);
  }
}
