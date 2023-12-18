import {Entity,Column,PrimaryGeneratedColumn, CreateDateColumn, BaseEntity, ManyToOne} from 'typeorm';
import { Product } from './Producto';

@Entity()
export class PromotionalProduct extends BaseEntity  {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Product, { nullable: true })
  producto: Product;
  @Column({ nullable: true })
  nombre: string;
  @Column({ nullable: true })
  descripcion: string;
  @Column({ nullable: true })
  precio_de_promocion: number;
  
  @Column({ type: 'timestamp'})
  fecha_de_inicio: Date;
  @Column({ type: 'timestamp'})
  fecha_de_finalizacion: Date;
  
  @Column({ nullable: true })
  activo: number;
  @Column({ nullable: true })
  precio_antiguo: number;
  @Column({ nullable: true })
  tipo_de_promocion: string;
}
