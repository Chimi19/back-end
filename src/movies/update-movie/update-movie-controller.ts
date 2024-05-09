import { Body, Controller, Param, Put } from "@nestjs/common";
import { PrismaService } from "src/shared/prisma.service";
import { UpdateMovie } from "./update-movie-response";
import { request } from "http";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Update')
@Controller('movies')
export class UpdateMovieController{
    constructor(private readonly prismaservice: PrismaService){}
    @Put(':id')
    async execute(@Param('id') id: string, @Body() request: UpdateMovie): Promise<void>{
       await this.prismaservice.movies.update({
            where: {id: id},
            data:{
                title: request.title,
                description: request.description,
                year: request.year,
                rating: request.rating,
                duration: request.duration,
                genre: request.genre,
            }

        })
    }
}