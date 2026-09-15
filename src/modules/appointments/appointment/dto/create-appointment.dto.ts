import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, Min, } from "class-validator";

export class CreateAppointmentDto{

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    id_usuario!: number;

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    id_estado_cita!: number;

    @IsNotEmpty()
    @IsDate()
    fecha_inicio!: Date;

    @IsDate()
    @IsNotEmpty()
    fecha_fin!: Date;

    @IsOptional()
    @IsString()
    comentario?: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    total!: number;
}