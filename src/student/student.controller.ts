import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { studentsDTO } from './DTO/STUDENTS.DTO';
import { Student } from './interface/student.interface';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}
  @Get()
  getstudent(): string {
    return this.studentService.getStudents();
  }

  @Post()
  async createStudent(@Body() data: studentsDTO): Promise<Student> {
  const createdStudent = await this.studentService.createStudent(data);
  console.log(createdStudent); // Log the created student data
  return createdStudent; // Return the created student
}

}
console.log( )
