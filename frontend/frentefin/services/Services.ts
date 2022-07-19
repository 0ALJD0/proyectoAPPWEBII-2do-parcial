import axios from "axios"
import {Vehiculo,Talleres,Cita,Cliente} from "../interfaces/InterfacesT"

const Maxios= axios.create({
    baseURL:`localhost:8080/`
})


//cliente
async function CreateClient (url:string, data:Cliente){
    return await Maxios.post(url, data)
}
async function ExistCliente (url:string, data:Cliente){
    return await Maxios.get<Cliente>(url,data)
}

//vehiculo
async function CreateVehiculo (url:string, data:Vehiculo){
    return await Maxios.post(url, data)
}

async function Vervehiculos (url:string, data:Vehiculo){
    return await Maxios.get<Vehiculo>(url,data)
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

async function VerTaller (url:string, data: Talleres){
    return await Maxios.get<Talleres>(url,data)
}

async function EditTaller (url:string, ID:string, data:Talleres){
    return await Maxios.put<Talleres>(url+ID,data)
}

//Cita
async function CreateCita (url:string, data:Cita){
    return await Maxios.post(url, data)
}

async function VerCita (url:string, data: Cita){
    return await Maxios.get<Cita>(url, data)
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
