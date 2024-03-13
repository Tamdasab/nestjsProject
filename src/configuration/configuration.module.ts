import { ConfigurationService } from './configuration.service';
import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class ConfigurationModule {
  static register(options: Record<string, string>): DynamicModule {
    return {
      module: ConfigurationModule,
      providers: [
        {
          provide: ConfigurationService,
          useValue: new ConfigurationService(options),
        },
      ],
      exports: [ConfigurationService],
    };
  }
}
