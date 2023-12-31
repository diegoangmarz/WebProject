import {Entity,Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity} from 'typeorm';

@Entity("product")
export class Product extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  nombre: string;
  @Column({ nullable: true })
  descripcion: string;
  @Column({ nullable: true })
  precio: number;
  @Column({ nullable: true })
  categoria: string;
  @Column({ nullable: true })
  fabricante: string;
  @Column({ nullable: true })
  cantidad_en_existencia: string;
  @Column({ nullable: true })
  unidad_de_medida: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_de_creacion: Date;
  @Column({ nullable: true })
  usuario_de_creacion: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_de_actualizacion: Date;
  @Column({ nullable: true })
  usuario_de_actualizacion: string;
  @Column({ nullable: true })
  activo: number;
  @Column({ nullable: true })
  tipo_de_vehiculo: string;
  @Column({ nullable: true })
  vida_util: string;
}
