import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  // constructor(
  //     @InjectRepository
  //     )
  findAll() {
    return 'hello worlds find all';
  }
}
