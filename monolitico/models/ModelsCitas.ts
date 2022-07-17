import mongoose from 'mongoose';
import {Schema, model,Types} from 'mongoose';
import { IModelsCitas } from '../interfaces/IModelsCitas';

const CitasSchema: mongoose.Schema = new Schema<IModelsCitas>({
    idcliente: {
        type: Types.ObjectId, 
        ref: "Cliente"
    },
    idtaller: {
        type: Types.ObjectId,
        ref: "Taller"
    },
    vehiculo: {
        type: Object
    },
    trabajo:[{
        type: String,
        require: true
    }],
    fechaCreacion:{
        type:Date,
        default: Date.now
    },
    estado:{
        type: Boolean,
        default: false,
        required: true,
    },
    eliminado:{
        type:Boolean,
        default:false,    
    }

});

const Citas: mongoose.Model<IModelsCitas>= model<IModelsCitas>('Cita', CitasSchema );


export{
    Citas
}