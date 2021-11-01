import { Controller, Get, Param } from '@nestjs/common';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {
    constructor(private readonly groupsService: GroupsService) {}

    @Get()
    getAll() {
        return this.groupsService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.groupsService.getOne(id);
    }
}