import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Contact } from "src/contacts/entities/contact.entity";

@Schema()
export class Group extends Document {
    @Prop()
    readonly name: string;

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Contact' })
    contacts: Contact[];
}

export const GroupSchema = SchemaFactory.createForClass(Group);