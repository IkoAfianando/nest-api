import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('iko')
  getIko(): string {
    return this.appService.getIko();
  }

  @Get('afianando')
    getAfianando(): string {
    const iko = () => {
      const coba = [{name: 'iko', age: 20}, {name: 'afianando', age: 20}];
      console.log(coba)
      return coba;
    }
    return JSON.stringify(iko());
  }
}
