import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateProductDto {
    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    id_categoria!: number;

    @IsString()
    @IsNotEmpty()
    nombre!: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    precio!: number;

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    stock!: number;

    // @IsString()
    // @IsOptional()
    // imagen?: string;
    
    @IsBoolean()
    @IsOptional()
    activo?: boolean;
}
