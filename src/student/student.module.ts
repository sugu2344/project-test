import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { MongooseModule } from '@nestjs/mongoose';
import { studentSchema } from 'src/entity/student.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Student', schema: studentSchema }]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
