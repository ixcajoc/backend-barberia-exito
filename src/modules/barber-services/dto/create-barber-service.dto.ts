import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateBarberServiceDto {
    @IsNumber()
    @IsNotEmpty()
    id_categoria!: number;

    @IsNotEmpty()
    @IsString()
    nombre!: string;

    @IsOptional()
    @IsString()
    descripcion?: string

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    precio!: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    duracion_servicio!: number;
    
    // imagen?: string;
    // updatate_at?: Date;
}
