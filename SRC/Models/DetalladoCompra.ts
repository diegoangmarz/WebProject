  import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne, BaseEntity } from 'typeorm';
  import { Compra } from './Compra';
import { Product } from './Producto';

  @Entity ()
  export class DetalladoCompra extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => Product)
    idproducto: Product;
    
    @ManyToOne(() => Compra)
    @JoinColumn()
    orden: Compra;

    @Column({default : 0})
    cantidad : number;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fecha_de_actualizacion: Date;
    @Column({default : "Admin"})
    usuario_de_creacion: string;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fecha_de_creacion: Date;
  }
