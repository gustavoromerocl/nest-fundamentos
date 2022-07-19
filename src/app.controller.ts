import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //Puede recibir la ruta base
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name') //get route in controller
  getHello(@Param('name') name: string): string { //para pasar query params es necesario importar el decoradro param
    return this.appService.getHello(name);
  }
}
