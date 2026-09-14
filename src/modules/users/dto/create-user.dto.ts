export class CreateUserDto {
    id_rol!: number;
    nombre!: string;
    apellido!: string;
    username!: string;
    email!: string;
    password!: string;
    telefono!: string;
    activo?: boolean;
    last_logon?: Date;
    // imagen?: string;
}
