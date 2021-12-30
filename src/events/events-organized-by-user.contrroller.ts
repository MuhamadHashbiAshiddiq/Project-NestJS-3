import {
  ClassSerializerInterceptor,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events-organized-by-user/:user.id')
export class EventsOrganizedByUserController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  async findAll(
    @Param('userId', ParseIntPipe) userId: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
  ) {
    return await this.eventsService.getEventsOrganizedByUserIdPaginated(
      userId,
      {
        currentPage: page,
        limit: 5,
      },
    );
  }
}
