import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
@Controller()
export class AppController {
 


  //Endpoint:
  //Un metodo de una clase 
  //que recibe una request
  //y puede enviar una response
  @Get()
  getMensaje(): string {
    return "aqui se van a consultar datos";
  }

  @Post()
  //Despues de los dos puntos 
  //va el tipo de dato de retorno
  // lo que va a devolver la funcion
  //  con el return
  crear(): string {
    return "aqui se van a registrar datos";
  }

  @Patch()
  actualizar(): string {
    return "aqui se van a actualizar datos";
  }

  @Delete()
  eliminar(): string {
    return "aqui se van a eliminar datos";
  }
}
