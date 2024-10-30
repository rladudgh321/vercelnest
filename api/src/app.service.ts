import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHi() {
    return 'my name is hahaha';
  }
  getHello(): string {
    return 'Hello World3!';
  }
}
