import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { MongooseModule } from '@nestjs/mongoose';
const connectionString= 'mongodb+srv://suganesh234:y4GqXWfrxEPy0pSI@nestjs.vljsxau.mongodb.net/?retryWrites=true&w=majority'

@Module({

  imports: [MongooseModule.forRoot(connectionString),StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
