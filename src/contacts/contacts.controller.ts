import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dtos/create-contact.dto';
import { GetContactDto } from './dtos/get-contact.dto';

@Controller('contacts')
export class ContactsController {
    constructor(private readonly contactsService: ContactsService) {}

    @Get()
    get(@Query() getContactDto: GetContactDto) {
        return this.contactsService.get(getContactDto);
    }

    @Post()
    create(@Body() createContactDto: CreateContactDto) {
        return this.contactsService.create(createContactDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.contactsService.delete(id);
    }
}