import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AspirantesService } from './aspirantes.service';
import { CreateAspiranteDto } from './dto/create-aspirante.dto';
import { UpdateAspiranteDto } from './dto/update-aspirante.dto';

@Controller('aspirantes')
export class AspirantesController {
  constructor(private readonly aspirantesService: AspirantesService) {}

  @Post()
  create(@Body() createAspiranteDto: CreateAspiranteDto) {
    return `aqui se van a registrar los aspirantes`;
  }

  @Get()
  findAll() {
    return "aqui se van a " +
        "consultar todos los aspirantes" ;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `aqui se va a consultar
    el aspirante cuyo id: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAspiranteDto: UpdateAspiranteDto) {
    return `aqui se va a actualizar 
    el aspirante cuyo id: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `aqui se va a eliminar 
    el aspirante cuyo id: ${id}`;
  }
}
