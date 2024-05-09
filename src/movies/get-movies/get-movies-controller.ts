import { Body, Controller, Get } from "@nestjs/common";
import { PrismaService } from "src/shared/prisma.service";
import { CreateMovieResponse } from "../create-movies/create-movies-response";
import { time } from "console";
import { title } from "process";
import { GetMovies } from "./get-movies-response";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Get Movies')
@Controller('movies')
export class GetMoviesController{
constructor(private readonly prismaservice: PrismaService){}
@Get()
async execute (): Promise<GetMovies[]>{
  const result = await this.prismaservice.movies.findMany({})
  const response = result.map(x=> {
    return{
        id: x.id,
        title: x.title,
        year: x.year,
        description: x.description,
        rating: x.rating,
        duration: x.duration,
        genre: x.genre,
        created_at: x.created_at
    }
  });
  return response;
}
}