import { Usuario } from './usuario';
import { Producto } from './producto';
//producto-usuario.ts  en el DTO
export interface ProductoUsuario {
  createdAt?: number;
  updatedAt?: number;
  id?: number;
  cantidad: number;
  fkUsuario: number | Usuario | any;
  fkProducto: number | Producto | any;
}
