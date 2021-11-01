import { BadRequestException, HttpCode, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from '../contacts/entities/contact.entity';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupsService {
    @InjectModel(Group.name) private readonly groupModel: Model<Group>

    async getAll() {
        return this.groupModel.find()
            .populate('contacts', null, Contact.name)
            .exec();
    }

    async getOne(id: string) {
        // Ensure id is valid mongodb id
        if(!id.match(/^[0-9a-fA-F]{24}$/)) {
            throw new BadRequestException("ID should be a valid mongodb ID");
        }

        const group = await this.groupModel.findOne({ _id: id })
            .populate('contacts', null, Contact.name)
            .exec();

        if(!group) {
            throw new NotFoundException(`Group #${id} not found`);
        }

        return group;
    }
}