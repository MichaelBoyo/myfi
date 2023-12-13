import { Module } from '@nestjs/common';
import { MyfiService } from './myfi.service';
import { MyfiController } from './myfi.controller';

@Module({
  providers: [MyfiService],
  controllers: [MyfiController],
})
export class MyfiModule {}
