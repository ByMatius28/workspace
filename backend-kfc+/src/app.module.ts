import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ComboModule } from './combo/combo.module';
import { ConfigModule } from '@nestjs/config';
import { ComboService } from './combo/combo.service';

@Module({
  imports: [PrismaModule, ComboModule,ConfigModule],
  controllers: [AppController],
  providers: [AppService,ComboService],
})
export class AppModule {}
