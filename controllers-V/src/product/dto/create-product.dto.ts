import { Allow, IsNumber, IsString, Max, Min, MinLength } from 'class-validator';

export class CreateProductDTO {
  @IsString({message: 'Debe ingresar texto'})
  @MinLength(3, {message: 'Debe ingresar cómo mínimo 3 caracteres'})
  private name: string;

  @IsNumber()
  @Min(0)
  @Max(2500)
  private price: number;

  @Min(1)
  @Max(100)
  private qty: number;

  @Allow() //Si usamos whitelist en el config de validation pipe, es necesario pasarle un decorador para ser considerado. Allow nos ayuda en caso de no tener que agregar un decorador
  private brand: string;
}