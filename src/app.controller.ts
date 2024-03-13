import { AppService } from './app.service';
import { ConfigurationService } from './configuration/configuration.service';
import { Controller, Get } from '@nestjs/common';
import { User } from './user/user.entity';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private configService: ConfigurationService,
    private userService: UserService,
  ) {}

  @Get('environment')
  getEnvironment(): string {
    return this.configService.getValue('environment');
  }

  @Get('users')
  getUser(): Promise<User[]> {
    return this.userService.getAllUser();
  }
}
