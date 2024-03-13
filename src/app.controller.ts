import { AppService } from './app.service';
import { ConfigurationService } from './configuration/configuration.service';
import { Controller } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private configService: ConfigurationService,
  ) {}
}
