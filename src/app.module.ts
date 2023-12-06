import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';
const connectionString= 'mongodb+srv://suganesh234:y4GqXWfrxEPy0pSI@nestjs.vljsxau.mongodb.net/?retryWrites=true&w=majority'

@Module({

  imports: [MongooseModule.forRoot(connectionString),StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
