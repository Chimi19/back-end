import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { request } from "http";
import { PrismaService } from "src/shared/prisma.service";
import { CreateMovieRequest } from "./create-movies-request";
import { CreateMovieResponse } from "./create-movies-response";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Create')
@Controller('movies')
export class CreateMovieController{
    constructor(private readonly prismaservice: PrismaService){}
    @Post()
    @ApiResponse({status: HttpStatus.OK, description:'', type: CreateMovieResponse})
    @ApiResponse({status: HttpStatus.NOT_FOUND, description:''})
    @ApiOperation({operationId: 'createCustomer'})
    @HttpCode(201)
    async execute(@Body() request: CreateMovieRequest): Promise<CreateMovieResponse>{

    
        const result = await this.prismaservice.movies.create({
            data:{
                title: request.title,
                description: request.description,
                year: request.year,
                rating: request.rating,
                duration: request.duration,
                genre: request.genre,
            },
        });
        return{
            id: result.id,
            created_at: result.created_at,
        }; 
    
    } 
}
