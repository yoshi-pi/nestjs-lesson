import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1h' }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule { }
