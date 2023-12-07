import {Entity,Column,PrimaryGeneratedColumn, CreateDateColumn, BaseEntity} from 'typeorm';

@Entity()
export class PromotionalProduct extends BaseEntity  {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  nombre: string;
  @Column({ nullable: true })
  descripcion: string;
  @Column({ nullable: true })
  precio_de_promocion: number;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_de_inicio: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_de_finalizacion: Date;
  @Column({ nullable: true })
  activo: number;
  @Column({ nullable: true })
  precio_antiguo: number;
  @Column({ nullable: true })
  tipo_de_promocion: string;
}
