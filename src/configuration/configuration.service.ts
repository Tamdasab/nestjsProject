import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { OptionsModule } from './configuration.options';

@Injectable()
export class ConfigurationService {
  private jwtService: JwtService = new JwtService();
  constructor(private options: OptionsModule) {}

  generate(payload: any): string {
    return this.jwtService.sign(payload, {
      secret: this.options.privateKey,
      expiresIn: this.options.expiresIn,
    });
  }

  verify(token: string): any {
    return this.jwtService.verify(token, {
      secret: this.options.privateKey,
    });
  }
}
