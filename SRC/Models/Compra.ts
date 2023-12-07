import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { DetalladoCompra } from './DetalladoCompra';

@Entity()
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column()
  nombre_del_cliente: string;

  @Column()
  precio_total: number;

  @Column()
  total_de_productos: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_de_creacion: Date;

  @Column()
  usuario_de_creacion: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_de_actualizacion: Date;

  @Column()
  usuario_de_actualizacion: string;

  @Column({ default: true })
  activo: boolean;

  @OneToMany(() => DetalladoCompra, detalleCompra => detalleCompra.orden)
  detalleCompras: DetalladoCompra[];
}
