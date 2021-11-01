import { IsOptional, IsString } from 'class-validator';

export class CreateContactDto {
    @IsString()
    readonly first_name: string;
    
    @IsString()
    readonly last_name: string;

    @IsString()
    readonly address: string;

    @IsString()
    readonly home_phone_number: string;

    @IsString()
    @IsOptional()
    readonly mobile_phone_number?: string;

    @IsString()
    @IsOptional()
    readonly work_phone_number?: string;
}