import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    private _movies: any;
    public get movies(): any{
        return this._movies;
    }
    public set movies(value: any){
        this._movies = value;
    }
    async onModuleInit() {
        await this.$connect();
    }
}