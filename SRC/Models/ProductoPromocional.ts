import {Entity,Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity} from 'typeorm';

@Entity()
export class PromotionalProduct {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  nombre: string;
  @Column({ nullable: true })
  descripcion: string;
  @Column({ nullable: true })
  precio_de_promocion: number;
  @Column({ nullable: true, type: 'date' })
  fecha_de_inicio: Date;
  @Column({ nullable: true, type: 'date' })
  fecha_de_finalizacion: Date;
  @Column({ nullable: true })
  activo: number;
  @Column({ nullable: true })
  precio_antiguo: number;
  @Column({ nullable: true })
  tipo_de_promocion: string;
}
