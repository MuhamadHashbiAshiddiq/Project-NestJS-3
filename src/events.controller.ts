import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('events')
export class EventsController {
  @Get()
  findAll() {
    // null;
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return id;
  }

  @Post()
  create() {
    // null;
  }

  @Patch(':id')
  update(@Param('id') id) {
    //null;
  }

  @Delete(':id')
  remove(@Param('id') id) {
    // null;
  }
}
