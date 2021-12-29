import { Repository } from 'typeorm';
import { Attendee } from './attendee.entity';

export class AttendeesService {
  constructor(private readonly attendeesRepository: Repository<Attendee>) {}

  public async findByEventId(eventId: number): Promise<Attendee[]> {
    return this.attendeesRepository.find({
      event: { id: eventId },
    });
  }
}
