import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CarsModule } from './cars/cars.module';
import { EmpresasModule } from './empresas/empresas.module';
import { AspirantesModule } from './aspirantes/aspirantes.module';

@Module({
  imports: [CarsModule, EmpresasModule, AspirantesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
