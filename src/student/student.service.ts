import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from './interface/student.interface';
import { studentsDTO } from './DTO/STUDENTS.DTO';

@Injectable()
export class StudentService {
  constructor(@InjectModel('Student') private readonly studentModel: Model<Student>) {}
  getStudents(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }
  
  async createStudent(data:studentsDTO): Promise<Student>{
    const student =new this.studentModel(data);
    return await student.save();

  }
  async update(id: string, updatedPerson: Student): Promise<Student> {
    return this.studentModel.findByIdAndUpdate(id, updatedPerson, { new: true });
  }
  async delete(id: string): Promise<void> {
    await this.studentModel.findByIdAndDelete(id);
  }  
}
