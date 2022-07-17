import{Request, Response} from 'express'
import {Taller} from '../models'


const crearTaller = async (req:Request,res:Response)=>{
    const {...dato}=req.body;
    const tallerExiste= await Taller.findOne({NombreTaller:dato.NombreTaller});
    if (tallerExiste) {
        res.status(400).json({
            message: `Este taller ya exite! ${tallerExiste.NombreTaller}`
        });
    }
    const taller = new Taller(dato);
    const nuevotaller= await taller.save();
    res.json(nuevotaller);

}
const verTalleres=async(req: Request,res:Response)=>{
    //hago la consulta y muestro los talleres
    const talleres = await Taller.find().populate('servicios','servicio');
    res.json({
        Microservicio: "verTalleres",
        data: talleres
    });
}
const editarTaller= async(req:Request,res:Response)=>{
    const {id} = req.params;
    const {...dato}=req.body;
     //retorna el json de la cita en la qie esta el usuario.
    const citaModificada= await Taller.findByIdAndUpdate(id,dato,{new:true}).populate('servicios','servicio')
    res.json(citaModificada);
}

export{crearTaller, editarTaller, verTalleres};
//