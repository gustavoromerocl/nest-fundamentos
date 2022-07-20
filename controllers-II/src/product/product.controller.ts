import { Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';

@Controller('product')
export class ProductController {
  /* 
    http://localhost:3000/product?page=1&perPAge=10&search=iphone
  */
  @Get()
  getAll(
    //A través del decorador Query podemos obtener los params que vienen a traves de la url
    //Hay dos formas de traerlos, la primera en un solo objeto y la segunda propiedad por propiedad  
    @Query() query: any,
    @Query('page') _page: string,
    @Query('perPage') _perPage: string,
    @Query('search') search: string
  ) {

    console.log(query);

    //const { page, perPAge, search } = query;

    //Parsear los valores de string a número
    const page = Number(_page);
    const perPage = Number(_perPage);

    const metadata = { page, perPage, search }
    return {
      message: 'Array of products',
      data: [],
      metadata,
    };
  }

  @Get()
  getOne() {
    return 'Specific product by ID or cursor';
  }

  @Post()
  create() {
    return 'Adding a new product';
  }

  @Put()
  update() {
    return 'Updating a product by ID or cursor';
  }

  @Delete()
  delete() {
    return 'Delete a product by ID or cursor';
  }
}
