import app from "./app"
import "reflect-metadata"
import { AppDataSource } from "./db"
async function main(){
    try{
        await AppDataSource.initialize()
        console.log("Se conecto a la base de datos")
        app.listen(3000)
        console.log("el servidor escucha en el puerto 3000")
    }catch(error){
        console.error(error)
    }


}
main()



