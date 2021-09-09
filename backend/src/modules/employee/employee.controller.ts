import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeeDTO } from './dto/create-employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employees')
export class EmployeeController {
  constructor(private employee: EmployeeService) {}

  @Get()
  findAll() {
    return this.employee.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.employee.findOne(id);
  }

  @Post('/creates')
  createOne(@Body() createEmployeeDTO: EmployeeDTO) {
    return this.employee.createOne(createEmployeeDTO);
  }
  @Put(':id')
  updateOne(@Param('id') id: number, @Body() updateEmployee: EmployeeDTO) {
    return this.employee.updateOne(id, updateEmployee);
  }
  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return this.employee.deleteOne(id);
  }
}
