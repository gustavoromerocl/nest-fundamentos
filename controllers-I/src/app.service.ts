import { Injectable } from '@nestjs/common';

@Injectable() //Inyecta las dependencias al proyecto
export class AppService {
  getHello(name: string): string {
    return `Hello ${name}!`;
  }
}
