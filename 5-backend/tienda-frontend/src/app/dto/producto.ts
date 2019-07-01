//producto.ts  --> en el DTO
export interface Producto {
  createdAt?: number;
  updatedAt?: number;
  id?: number;
  nombre: string;
  apellido: string;
  codigo: string;
  arregloProductosUsuario?: any[];
}
