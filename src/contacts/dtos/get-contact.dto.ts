import { IsMongoId, IsOptional, IsString } from 'class-validator';

export class GetContactDto {
    @IsMongoId()
    @IsOptional()
    readonly _id?: string;

    @IsString()
    @IsOptional()
    readonly first_name?: string;
    
    @IsString()
    @IsOptional()
    readonly last_name?: string;

    @IsString()
    @IsOptional()
    readonly address?: string;

    @IsString()
    @IsOptional()
    readonly home_phone_number?: string;

    @IsString()
    @IsOptional()
    readonly mobile_phone_number?: string;

    @IsString()
    @IsOptional()
    readonly work_phone_number?: string;
}