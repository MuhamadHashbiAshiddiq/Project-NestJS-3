import {
  ClassSerializerInterceptor,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { AttendeesService } from './attendees.service';

export class EventAttendeesController {
  constructor(private readonly attendeesService: AttendeesService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  async findAll(@Param('eventId') eventId: number) {
    return await this.attendeesService.findByEventId(eventId);
  }
}
