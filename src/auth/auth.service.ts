import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) { }
  async login(user: CreateUserDto) {
    const payload = { username: user.username }
    return {
      'access_token': this.jwtService.sign(payload)
    }
  }
}
