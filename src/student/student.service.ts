import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './interface/student.interface';
import { studentsDTO } from './DTO/STUDENTS.DTO';

@Injectable()
export class StudentService {
  constructor(@InjectModel('Student') private readonly studentModel: Model<Student>) {}
  getStudents(): string {
    return 'hi i am from student from service';
  }
  async createStudent(data:studentsDTO): Promise<Student>{
    const student =new this.studentModel(data);
    return await student.save();

  }
}
