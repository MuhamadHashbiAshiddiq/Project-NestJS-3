import { Inject } from '@nestjs/common';

export class AppIndoService {
  constructor(
    @Inject('APP_NAME')
    private readonly name: string,
    @Inject('MESSAGE')
    private readonly message: string,
  ) {}
  getHello(): string {
    console.log(process.env);
    return 'Helo, Dunia dari ${this.name}, ${this.message}';
  }
}
