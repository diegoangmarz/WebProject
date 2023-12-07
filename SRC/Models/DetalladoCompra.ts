import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Compra } from './Compra';

@Entity()
export class DetalladoCompra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  producto: string;

  @ManyToOne(() => Compra)
  @JoinColumn()
  orden: Compra;

  @Column()
  usuario_de_creacion: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_de_actualizacion: Date;
}
