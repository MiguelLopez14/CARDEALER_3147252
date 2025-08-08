import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Controller('empresas')
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) {}

  @Post()
  create(@Body() createEmpresaDto: CreateEmpresaDto) {
    return `aqui se van a registrar los carros`
  }

  @Get()
  findAll() {
    return "aqui se van a " +
        "consultar todas las empresas";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `aqui se va a consultar
    la empresa cuyo id: ${id}`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    return `aqui se va a actualizar 
    la empresa cuyo id: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `aqui se va a eliminar 
    la empresa cuyo id: ${id}`  ;
  }
}
