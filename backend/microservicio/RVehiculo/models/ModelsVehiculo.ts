import mongoose from 'mongoose';
import {Schema, model, Types} from 'mongoose';
import { IModelsVehiculo } from '../interfaces/IModelsVehiculo';


const VehiculoSchema: mongoose.Schema = new Schema<IModelsVehiculo>({
    idcliente: {
        type: Types.ObjectId},
    placa:{
        type: String,
        required:true,
        
    },
    Marca:{
        type: String,
        default:'NA'
    },
    Color:{
        type: String,
        default: 'NA'
    },
    Modelo:{
        type: String,
        require: true
    },
    eliminado: {   type: Boolean, default: false , required: true},
})

const Vehiculo: mongoose.Model<IModelsVehiculo> = model<IModelsVehiculo>('Vehiculo',VehiculoSchema);

export{
    Vehiculo
}