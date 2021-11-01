import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Contact extends Document {
    @Prop()
    readonly first_name: string;
    
    @Prop()
    readonly last_name: string;

    @Prop()
    readonly address: string;

    @Prop()
    readonly home_phone_number: string;

    @Prop()
    readonly mobile_phone_number: string;

    @Prop()
    readonly work_phone_number: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);