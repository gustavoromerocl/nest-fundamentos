import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
//import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  /**
   * http://localhost:3000/product?page=1&perPage=10&search=iphone
   */
  @Get()
  getAll(
    @Query('page') _page: string,
    @Query('perPage') _perPage: string,
    @Query('search') search: string,
    @Query() query: any,
  ) {
    console.log(query);

    const page = parseInt(_page, 10);
    const perPage = parseInt(_perPage, 10);

    const metadata = { page, perPage, search };

    return {
      message: 'Array of products',
      data: [],
      metadata,
    };
  }

  /**
   * - Parámetros URL - @Param()
   *   /product/parametro-estatico
   *   /product/:parametro-dinamico
   *   /product/:productID/categoria/:categoryID
   */
  @Get(':productID/categoria/:categoryName') //Parametro dinámicos a traves de la uri
  getOne(
    @Param('productID') id: number, //Se pueden extraer al igual que las query params con el decorador @Param
    @Param('categoryName') categoryName: string,
  ) {
    return {
      message: 'Get a product by ID',
      data: { id: Number(id), categoryName }, //Realizamos el parseo al momento de retornar, los params por default son strings aunque indiquemos lo contrario al momento de la declaracion
    };
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
