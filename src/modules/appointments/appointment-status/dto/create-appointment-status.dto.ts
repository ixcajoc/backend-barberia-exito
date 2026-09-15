import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAppointmentStatusDto {

    @IsString()
    @IsNotEmpty()
    nombre!: string;

    @IsString()
    @IsOptional()
    descripcion?: string;
}