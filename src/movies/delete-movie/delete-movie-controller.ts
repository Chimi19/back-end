import { Controller, Delete, HttpException, HttpStatus, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PrismaService } from "src/shared/prisma.service";


@ApiTags('Delete')
@Controller('movies')
export class DeleteMovieController{
constructor(private readonly prismaservice: PrismaService){}

@Delete(':id')
async execute (@Param('id')  id:string): Promise<void>{
    const result = await this.prismaservice.movies.findUnique({
        where:{id:id},
    });
    if(!result) throw new HttpException('Customernot found', HttpStatus.NOT_FOUND);
    await this.prismaservice.movies.delete({
        where:{id:id}
    })
          
}
}