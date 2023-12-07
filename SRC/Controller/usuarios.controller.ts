import {Request,Response} from "express"
import {usuario } from "../Models/usuario"
export const CrearUsuario =async(req : Request, res : Response)   => {
    const{nombre, contrasenia, email, usuario_de_creacion, numero_de_telefono} = req.body
    const user = new usuario
    user.nombre = nombre
    user.contrasenia = contrasenia
    user.email = email
    user.usuario_de_creacion = usuario_de_creacion
    user.numero_de_telefono = numero_de_telefono
    console.log(user)
    await user.save()
    res.send("Usuario creado")

}
export const ObtenerUsuario =async(req : Request, res : Response)   => {
    const users = await usuario.find()
    return res.json(users)


}

export const ObtenerUsuarioID =async (req:Request, res: Response) => {
    const users = await usuario.findOneBy({id :parseInt(req.params.id) })
    return res.json(users)
}
export const ActualizarUsuario = async(req : Request, res : Response)   => {
    const{nombre, contrasenia, email, usuario_de_actualizacion, numero_de_telefono} = req.body
    const user = await usuario.findOneBy({id :parseInt(req.params.id) }) 
    
    if(!user)return res.json({message:"Usuario no encontrado"})
    user.nombre = nombre
    user.contrasenia = contrasenia
    user.email = email
    user.usuario_de_actualizacion = usuario_de_actualizacion
    user.numero_de_telefono = numero_de_telefono
    console.log(user)
    await user.save()
    res.send("Usuario actualizado")
    return res.json(user)

}
export const EliminarUsuario =async(req : Request, res : Response)   => {
    const result = await usuario.delete({id :parseInt(req.params.id) })
    if(result.affected === 0)res.send("Usuario no encontrado")
    else res.send("Usuario Borrado")


}