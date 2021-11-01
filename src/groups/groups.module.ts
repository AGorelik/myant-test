import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Group, GroupSchema } from './entities/group.entity';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Group.name,
                schema: GroupSchema
            }   
        ]),
    ],
    controllers: [GroupsController],
    providers: [GroupsService]
})
export class GroupsModule {}