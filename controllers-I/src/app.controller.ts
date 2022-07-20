import { Controller, Get, Header, HttpCode, HttpStatus, Patch, Post, Res } from "@nestjs/common";
import { Response } from "express";

//Decorador de funcionalidad: Inyecta funcionalidades a la clase 
// para recibir las solicitudes http y enviar respuestas
@Controller()
export class AppController {
  elements = ['coche', 'moto', 'bicicleta'];

  //GET
  @Get()
  getAll() {
    return this.elements;
  }

  //CREATE
  @Post('http-code')
  //@HttpCode(HttpStatus.NO_CONTENT) //Customer state response 
  create() {
    this.elements.push('nuevo elemento');
    return this.elements;
  }

  //UPDATE
  @Patch('http-code')
  @HttpCode(HttpStatus.PARTIAL_CONTENT) //Customer state response 
  httpCode2() {
    this.elements[0] = 'vehículo';
    console.log('Se ha editado el primer elemento');
    return `Edited: ${this.elements[0]}`;
  }

  //SEND HEADERS
  @Get('header')
  @HttpCode(HttpStatus.ACCEPTED)
  @Header('mi-propiedad-header', 'valor de la propiedad')
  responseWithDecoratorHeader() {
    return 'OK, mira los headers!';
  }

  //Express native config
  @Get('library-specific')
  librarySpecific(@Res() res: Response) {
    return res
      .status(HttpStatus.OK)
      .header('mi-propiedad-header', 'valor de la propiedad')
      .jsonp('Todo ok con la librería especifica') //json primitivo
  }

  //Combined nest and express
  @Get('combined-response')
  combinedRsponseStrategies(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    res.header('mi-propiedad-header', 'valor de la propiedad');
    return res.json('Respuesta combinada, mirar en headers para verificar');
  }

}