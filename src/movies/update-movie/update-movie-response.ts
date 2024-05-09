import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";
export class UpdateMovie{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    title: string;
     
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    year: string;


    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    rating: string;


    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    duration: string;


    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    genre: string;

}