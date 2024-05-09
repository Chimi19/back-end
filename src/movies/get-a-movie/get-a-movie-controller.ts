import { Controller, Get, Param } from "@nestjs/common";
import { PrismaService } from "src/shared/prisma.service";
import { GetAMovieResponce } from "./get-a-movie-response";
import { ApiTags } from "@nestjs/swagger";
@ApiTags('Get Movie by I.D')
@Controller('movies')
export class GetAMovieController{
    constructor (private readonly prismaservice: PrismaService){}



    @Get(':id')
    async execute (@Param('id') id: string): Promise<GetAMovieResponce>{
        const result = await this.prismaservice.movies.findUnique({
            where: {
                id: id
            }
        })
return {
    id: result.id,
    title: result.title,
    year: result.year,
    genre: result.genre,
    description: result.description,
    rating: result.rating,
    duration: result.duration,
    created_at: result.created_at
}
    }
}