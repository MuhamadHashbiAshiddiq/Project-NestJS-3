import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('events')
export class EventsController {
  @Get()
  findAll() {
    // null;
  }

  @Get()
  findOne() {
    // null;
  }

  @Post()
  create() {
    // null;
  }

  @Patch()
  update() {
    // null;
  }

  @Delete()
  remove() {
    // null;
  }
}
