import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BankModule } from './bank/bank.module';
import { MyfiModule } from './myfi/myfi.module';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URI),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BankModule,
    MyfiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
