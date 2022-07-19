import {Vehiculo} from '../models/ModelsVehiculo'
import { IModelsVehiculo} from '../interfaces/IModelsVehiculo'
import{Request, Response} from 'express'

const CrearVehiculo = async (req: Request,res: Response)=>{

    try {
        const {...dato} = req.body;
        const existeplaca = await Vehiculo.findOne({placa:dato.placa});
        if (!existeplaca ){
            const vehiculo = new Vehiculo(dato);
            const nuevovehiculo= await vehiculo.save();
            
            return res.status(201).json(nuevovehiculo); 
            
        }
        
        return res.status(404).json({message: "Placa YA Existente"});
    } catch (error) {
        
        console.log(error);
    }
   //guarda y manda al body el id
}

const Vervehiculo = async (req: Request, res: Response)=>{
    const {id} = req.params
    const producto: IModelsVehiculo|null = (await Vehiculo.findById(id));
    res.json(producto)
 }
 
const Vervehiculos = async (req: Request, res: Response) => {
    const {id}=req.params;
    const [total, vehiculosT] = await Promise.all([
        Vehiculo.countDocuments(),
        Vehiculo.find({idcliente:id,eliminado:false}),
    ])
    res.status(200).json({
        total:
            total,
        datos:
            vehiculosT,
    });
}

const editarVehiculo= async(req: Request,res: Response)=>{
    try {
        const {id} = req.params;
        const {...dato}=req.body;
        const vehiculoM= await Vehiculo.findByIdAndUpdate(id,dato,{new:true})
        res.json(vehiculoM);
    } catch (error) {
        console.log(error) ;
        res.status(400).json({message: error});
    }
}

const EliminarVehiculo = async (req: Request, res: Response)=>{
        const {id} = req.params
        const Borrarvehiculo = await Vehiculo.findByIdAndUpdate(id,{eliminado:true},{new:true});
        res.json(Borrarvehiculo);
    }

export{
    Vervehiculo,
    Vervehiculos,
    CrearVehiculo,
    editarVehiculo,
    EliminarVehiculo
}