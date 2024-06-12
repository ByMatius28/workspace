import { Injectable } from '@nestjs/common';
import { CreateComboDto } from './dto/create-combo.dto';
import { UpdateComboDto } from './dto/update-combo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ComboService {
  constructor(private prisma: PrismaService) {}
  
  createCombo(comboData: any): any {
    // Aquí iría la lógica para crear un combo en la base de datos
    return { message: 'Combo creado exitosamente', data: comboData };
}

  create(createComboDto: CreateComboDto) {
    return this.prisma.combo.create({ data: createComboDto});
  }

  findAll() {
    return this.prisma.combo.findMany({ });
  }

  findOne(id: number) {
    return this.prisma.combo.findUnique({ where: {id}});
  }

  update(id: number, updateComboDto: UpdateComboDto) {
    return this.prisma.combo.update({
      where: {id},
      data: updateComboDto,
    });
  }

  remove(id: number) {
    return this.prisma.combo.delete({ where: {id}});
  }
}
