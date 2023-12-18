import {Request,Response, NextFunction} from "express"
import {usuario } from "../Models/usuario"





export const login = async (req: Request, res: Response, next:NextFunction): Promise<void> => {
    try {
        const{usuariologin,contrasenialogin} = req.body

        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: usuariologin,
                password: contrasenialogin
            }),
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
            const token = data.token; 
            if (token) {
                next()
            } else {
                res.status(401).json({ message: 'No se recibió un token en la respuesta' });
            }
        } else {
            res.status(response.status).json({ message: 'Error al autenticar' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
export const verificarToken = async (req: Request, res: Response, next : NextFunction): Promise<void> => {
    const token = req.body.token; 
    try {
        const response = await fetch('https://dummyjson.com/auth/verify-token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token }),
        });

        if (response.ok) {
            const data = await response.json();
            if (data.valid) {
                next()
            } else {
                res.status(401).json({ message: 'Token inválido' });
            }
        } else {
            res.status(response.status).json({ message: 'Error al verificar el token' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};




export const CrearUsuario =async(req : Request, res : Response)   => {
    const{nombre, contrasenia, email, usuario_de_creacion, numero_de_telefono, tipo_de_usuario, activo} = req.body
    const user = new usuario
    user.nombre = nombre
    user.contrasenia = contrasenia
    user.email = email
    user.usuario_de_creacion = usuario_de_creacion
    user.numero_de_telefono = numero_de_telefono
    user.tipo_de_usuario = tipo_de_usuario
    user.activo = activo
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