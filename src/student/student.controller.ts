import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { studentsDTO } from './DTO/STUDENTS.DTO';
import { Student } from './interface/student.interface';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get("/")
  async getstudent(): Promise<Student[]> {
    return this.studentService.getStudents();
  }

  @Post("/")
  async createStudent(@Body() data: studentsDTO): Promise<Student> {
    const createdStudent = await this.studentService.createStudent(data);
    console.log(createdStudent);
    return createdStudent;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatedPerson: Student,
  ): Promise<Student> {
    return this.studentService.update(id, updatedPerson); // Fix the case here
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.studentService.delete(id); // Fix the case here
  }
}
