export class Empleado {
    nombre: string;
    apellidos: string;
    departamento: string;
    activo: boolean;

    constructor(pNombre: string, pApellidos: string, pDepartamento: string, pActivo: boolean) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.departamento = pDepartamento;
        this.activo = pActivo;
    }
}
