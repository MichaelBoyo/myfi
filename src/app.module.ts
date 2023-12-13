import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BankModule } from './bank/bank.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      // TODO: put this in environment
      `mongodb+srv://sphinx-developer:fbedKnB064aQA3zQ@cluster0.xy2yevy.mongodb.net/?retryWrites=true&w=majority`,
    ),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BankModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
