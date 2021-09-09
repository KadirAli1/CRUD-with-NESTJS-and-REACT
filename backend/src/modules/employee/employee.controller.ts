import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employees')
export class EmployeeController {
  constructor(private employee: EmployeeService) {}

  @Get()
  findAll() {
    return 'hello Worlds';
  }

  @Get(':id')
  findOne() {
    return ' returm one employee';
  }

  @Post('/creates')
  createOne() {
    return 'i am created one ';
  }
  @Put(':id')
  updateOne() {
    return 'update one';
  }
  @Delete(':id')
  deleteOne() {
    return 'delte one';
  }
}
