import {Request,Response} from "express"
import {usuario } from "../Models/usuario"
export const CrearUsuario =async(req : Request, res : Response)   => {
    const{nombre, contrasenia, email} = req.body
    const user = new usuario
    user.nombre = nombre
    user.contrasenia = contrasenia
    user.email = email
    console.log(user)
    await user.save()
    res.send("Usuario creado")

}
export const ObtenerUsuario =async(req : Request, res : Response)   => {
    const users = await usuario.find()
    return res.json(users)


}
export const ActualizarUsuario = async(req : Request, res : Response)   => {
    const{nombre, contrasenia, email} = req.body
    const user = await usuario.findOneBy({id :parseInt(req.params.id) }) 
    
    if(!user)return res.json({message:"Usuario no encontrado"})
    user.nombre = nombre
    user.contrasenia = contrasenia
    user.email = email
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