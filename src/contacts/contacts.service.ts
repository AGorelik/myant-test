import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContactDto } from './dtos/create-contact.dto';
import { GetContactDto } from './dtos/get-contact.dto';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactsService {
    constructor(
        @InjectModel(Contact.name) private readonly contactModel: Model<Contact>
    ) {}

    async get(getContactDto: GetContactDto) {
        return await this.contactModel.find(getContactDto).exec();
    }

    async create(createContactDto: CreateContactDto) {
        const contact = await new this.contactModel(createContactDto);
        return contact.save();
    }

    async delete(id: string) {
        // Ensure id is valid mongodb id
        if(!id.match(/^[0-9a-fA-F]{24}$/)) {
            throw new BadRequestException("ID should be a valid mongodb ID");
        }

        return await this.contactModel.deleteOne({ _id: id});
    }
}