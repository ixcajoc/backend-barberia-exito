import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCategoryDto {

    @IsNotEmpty()
    @IsString()
    nombre!: string;

    @IsString()
    @IsOptional()
    descripcion?: string;
}
