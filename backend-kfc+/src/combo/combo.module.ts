import { Module } from '@nestjs/common';
import { ComboService } from './combo.service';
import { ComboController } from './combo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ComboController],
  providers: [ComboService],
  imports: [PrismaModule]
})
export class ComboModule {}
