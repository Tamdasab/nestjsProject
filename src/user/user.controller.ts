import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { Users } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers(): Promise<Users[]> {
    return this.userService.findAllUsers();
  }

  @Post()
  async create(@Body() payload: { name: string }): Promise<Users> {
    if (!payload.name) {
      throw new BadRequestException('name is required');
    }
    return await this.userService.createUser(payload);
  }
}
