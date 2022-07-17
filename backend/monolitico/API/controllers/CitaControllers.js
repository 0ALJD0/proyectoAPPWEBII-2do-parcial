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
exports.verCitasRepre = exports.verCitasCliente = exports.elminaCita = exports.crearCita = void 0;
const models_1 = require("../models");
const crearCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dato = __rest(req.body, []);
    const cita = new models_1.Citas(dato);
    const nuevacita = yield cita.save();
    res.status(201).json(nuevacita);
});
exports.crearCita = crearCita;
const verCitasCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const clienteExistente = yield models_1.Usuario.find({ _id: id });
        if (clienteExistente.length > 0) {
            const citas = yield models_1.Citas.find({ idcliente: clienteExistente[0]._id,
                estado: false, eliminado: false
            }).populate('idcliente', 'Nombre').populate('idtaller', 'NombreTaller');
            return res.json({
                data: citas
            });
        }
        else {
            return res.status(201).json({ message: `No tiene citas activas` });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.verCitasCliente = verCitasCliente;
const verCitasRepre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dato = __rest(req.body, []); //el nombre del taller
    const existeTaller = yield models_1.Taller.find({ NombreTaller: dato.NombreTaller });
    if (existeTaller.length > 0) {
        const citas = yield models_1.Citas.find({ idtaller: existeTaller[0]._id,
            estado: false, eliminado: false
        }).populate('idcliente', 'Nombre').populate('idtaller', 'NombreTaller');
        //console.log(citas);
        return res.json(citas);
    }
    res.status(400).json({ message: `No se encontró el Taller con el nombre: ${dato.NombreTaller}` });
});
exports.verCitasRepre = verCitasRepre;
const elminaCita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    //retorna el json de la cita en la qie esta el usuario.
    const citaModificada = yield models_1.Citas.findByIdAndUpdate(id, { eliminado: true }, { new: true });
    res.json(citaModificada);
});
exports.elminaCita = elminaCita;
