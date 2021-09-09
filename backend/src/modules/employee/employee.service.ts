import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeDTO } from './dto/create-employee.dto';
import { create } from 'domain';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  findOne(id: number): Promise<Employee> {
    return this.employeeRepository.findOne(id);
  }

  createOne(createEmployeedDTO: EmployeeDTO) {
    return this.employeeRepository.save(createEmployeedDTO);
  }

  updateOne(id: number, updateEmployeeDTO: EmployeeDTO) {
    return this.employeeRepository.update(id, updateEmployeeDTO);
  }
  deleteOne(id: number) {
    return this.employeeRepository.delete(id);
  }
}
