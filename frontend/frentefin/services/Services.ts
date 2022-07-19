import axios from "axios"
import {Vehiculo,Talleres,Cita,Cliente, Existe} from "../interfaces/InterfacesT"

const Maxios= axios.create({
    baseURL:`localhost:8080/`
})


//cliente
async function CreateClient (url:string, data:Cliente){
    return await Maxios.post(url, data)
}

async function ExistCliente (url:string, ID:String){
    return await Maxios.get<Existe>(url+ID)

}

//vehiculo
async function CreateVehiculo (url:string, data:Vehiculo){
    return await Maxios.post(url, data)
}

async function Vervehiculos (url:string,ID:String){
    return await Maxios.get<Vehiculo>(url+ID)
}

async function EditVehicle (url:string, ID:string, data:Vehiculo){
    return await Maxios.put<Vehiculo>(url+ID,data)
}

async function DeleteVehicle (url:string, ID:string){
    return await Maxios.put<Vehiculo>(url+ID)
}

//talleres
async function CreateTaller (url:string, data:Talleres){
    return await Maxios.post(url, data)
}

async function VerTaller (url:string){
    return await Maxios.get<Talleres>(url)
}

async function EditTaller (url:string, ID:string, data:Talleres){
    return await Maxios.put<Talleres>(url+ID,data)
}

//Cita
async function CreateCita (url:string, data:Cita){
    return await Maxios.post(url, data)
}

async function VerCita (url:string, ID:String,){
    return await Maxios.get<Cita>(url+ID)
}

async function DeleteCita (url:string, ID:string){
    return await Maxios.put<Cita>(url+ID)
}

//controlador de error
function erroraxios (error:Error){
    if (axios.isAxiosError(error)) {
        console.log("Se ha producido un error en el axios");
    }
    console.log(error)        
}
export {
    erroraxios, CreateCita, DeleteCita, VerTaller,VerCita, EditTaller,
    CreateTaller, DeleteVehicle, EditVehicle, CreateClient, ExistCliente,
    CreateVehiculo, Vervehiculos,
    
}