export class CreateAppointmentDetailDto{
    id_cita!: number;
    id_servicio?: number;
    id_producto?: number;
    precio_unitario!: number;
    cantidad!: number;
    subtotal!: number;
}