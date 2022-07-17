"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
const mongoose_1 = require("mongoose");
const VehiculoSchema = new mongoose_1.Schema({
    idcliente: {
        type: mongoose_1.Types.ObjectId
    },
    placa: {
        type: String,
        required: true,
    },
    Marca: {
        type: String,
        default: 'NA'
    },
    Color: {
        type: String,
        default: 'NA'
    },
    Modelo: {
        type: String,
        require: true
    },
    eliminado: { type: Boolean, default: false, required: true },
});
const Vehiculo = (0, mongoose_1.model)('Vehiculo', VehiculoSchema);
exports.Vehiculo = Vehiculo;
