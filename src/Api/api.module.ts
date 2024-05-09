import { Module } from "@nestjs/common";
import { CreateMovieController } from "src/movies/create-movies/create-movies-controller";
import { DeleteMovieController } from "src/movies/delete-movie/delete-movie-controller";
import { GetAMovieController } from "src/movies/get-a-movie/get-a-movie-controller";
import { GetMoviesController } from "src/movies/get-movies/get-movies-controller";
import { GetMovies } from "src/movies/get-movies/get-movies-response";
import { UpdateMovieController } from "src/movies/update-movie/update-movie-controller";
import { PrismaModule } from "src/shared/prisma.module";

@Module({
    imports:[PrismaModule],
    controllers:[
        CreateMovieController,
        DeleteMovieController,
        UpdateMovieController,
        GetMoviesController,
        GetAMovieController
    ],
    providers:[],
    exports:[]
})
export class APImodule{}