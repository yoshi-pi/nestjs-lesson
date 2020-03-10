import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://yoshipi:1234567890@cluster0-s9egy.gcp.mongodb.net/nest?retryWrites=true&w=majority'), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
