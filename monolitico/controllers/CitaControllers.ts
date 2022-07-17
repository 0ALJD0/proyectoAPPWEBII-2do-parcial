import{Request, Response} from 'express'
import {Citas, Taller, Usuario} from '../models'

const crearCita = async(req:Request,res:Response)=>{
    const {...dato} = req.body;
    const cita = new Citas(dato);
    const nuevacita= await cita.save();
    res.status(201).json(nuevacita);
}

const verCitasCliente= async(req: Request, res: Response)=>{ 
    try {
        const {...dato} = req.body;
        const clienteExistente = await Usuario.find({ci:dato.ci});
        if(clienteExistente.length > 0){
            const citas = await Citas.find({idcliente:clienteExistente[0]._id,
                estado: false, eliminado: false
            }).populate('idcliente','Nombre').populate('idtaller', 'NombreTaller')
            .populate('idvehiculo', 'placa');

            return res.json({
                data: citas
            })
        } else {
            return res.status(400).json({message: `No se encontro el cliente con ci: ${dato.ci}`}); 
        }
    } catch (error) {
        console.log(error);
    }
}

const verCitasRepre = async (req:Request,res:Response)=>{
    const {...dato}= req.body;//el nombre del taller
    const existeTaller= await Taller.find({NombreTaller:dato.NombreTaller});

    if (existeTaller.length>0) {

            const citas = await Citas.find({idtaller:existeTaller[0]._id,
            estado:false,eliminado:false
            }).populate('idcliente','Nombre').populate('idtaller', 'NombreTaller')
            .populate('idvehiculo', 'placa');
            //console.log(citas);
            return res.json(citas);
    }
    res.status(400).json({message:`No se encontró el Taller con el nombre: ${dato.NombreTaller}`});
}

const elminaCita = async(req:Request,res:Response)=>{
    const {id} = req.params;
     //retorna el json de la cita en la qie esta el usuario.

    const citaModificada= await Citas.findByIdAndUpdate(id,{eliminado:true},{new:true});
    res.json(citaModificada);
    
    
}


export{
    crearCita,
    elminaCita,
    verCitasCliente,
    verCitasRepre
}
