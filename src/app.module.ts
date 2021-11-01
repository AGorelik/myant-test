import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [ContactsModule, GroupsModule, MongooseModule.forRoot('mongodb://localhost:27017/sampledb')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}