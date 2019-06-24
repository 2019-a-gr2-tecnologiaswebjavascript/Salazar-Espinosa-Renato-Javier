export interface ProductoUsuario {
  createdAt?: number;
  updatedAt?: number;
  id?: number;
  cantidad: number;
  fkUsuario: number | any;
  fkProducto: number | any;
}
