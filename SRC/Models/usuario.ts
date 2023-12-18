import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";

@Entity("usuario")
export class usuario extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    nombre: string;
    @Column({ nullable: true })
    contrasenia: string;
    @Column({ nullable: true })
    email: string;
    @CreateDateColumn({ nullable: true })
    fechaDeCreacion: Date;
    @UpdateDateColumn({ nullable: true })
    fechaDeActualizacion: Date;
    @Column({ nullable: true })
    usuario_de_actualizacion: string;
    @Column({ nullable: true })
    activo: number;
    @Column({ nullable: true })
    tipo_de_usuario: string;
    @Column({ nullable: true })
    numero_de_telefono: string;
    @Column({ nullable: true })
    usuario_de_creacion: string;
   
}
