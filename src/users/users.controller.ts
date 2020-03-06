import { Controller, Post, Body, Param, Query, Response } from '@nestjs/common';

@Controller('users')
export class UsersController {

  @Post()
  create(@Body() createUsers) {
    return createUsers
  }
}
