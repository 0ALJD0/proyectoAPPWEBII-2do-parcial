"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EliminarVehiculo = exports.editarVehiculo = exports.CrearVehiculo = exports.Vervehiculos = exports.Vervehiculo = void 0;
const ModelsVehiculo_1 = require("../models/ModelsVehiculo");
const CrearVehiculo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dato = __rest(req.body, []);
        const existeplaca = yield ModelsVehiculo_1.Vehiculo.findOne({ placa: dato.placa });
        if (!existeplaca) {
            const vehiculo = new ModelsVehiculo_1.Vehiculo(dato);
            const nuevovehiculo = yield vehiculo.save();
            return res.status(201).json(nuevovehiculo);
        }
        return res.status(404).json({ message: "Placa YA Existente" });
    }
    catch (error) {
        console.log(error);
    }
    //guarda y manda al body el id
});
exports.CrearVehiculo = CrearVehiculo;
const Vervehiculo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = (yield ModelsVehiculo_1.Vehiculo.findById(id));
    res.json(producto);
});
exports.Vervehiculo = Vervehiculo;
const Vervehiculos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dato = __rest(req.body, []);
    const [total, vehiculosT] = yield Promise.all([
        ModelsVehiculo_1.Vehiculo.countDocuments(),
        ModelsVehiculo_1.Vehiculo.find({ idcliente: dato.idcliente, eliminado: false }),
    ]);
    res.status(200).json({
        total: total,
        datos: vehiculosT,
    });
});
exports.Vervehiculos = Vervehiculos;
const editarVehiculo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const dato = __rest(req.body, []);
        const vehiculoM = yield ModelsVehiculo_1.Vehiculo.findByIdAndUpdate(id, dato, { new: true });
        res.json(vehiculoM);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
});
exports.editarVehiculo = editarVehiculo;
const EliminarVehiculo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Borrarvehiculo = yield ModelsVehiculo_1.Vehiculo.findByIdAndUpdate(id, { eliminado: true }, { new: true });
    res.json(Borrarvehiculo);
});
exports.EliminarVehiculo = EliminarVehiculo;
