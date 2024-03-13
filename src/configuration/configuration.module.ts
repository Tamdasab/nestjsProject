import { ConfigurationService } from './configuration.service';
import { DynamicModule, Module } from '@nestjs/common';
import { OptionsModule } from './configuration.options';

@Module({})
export class ConfigurationModule {
  static register(options: OptionsModule): DynamicModule {
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
