import { Router } from "express"
import { check } from "express-validator"
import { Cvehiculo } from "../controllers/"
import validaciones from '../middleware'


const {CrearVehiculo, Vervehiculo,editarVehiculo,EliminarVehiculo,Vervehiculos} = Cvehiculo

const {validarCampos}= validaciones

const router= Router()

router.post('/nvehiculo',check('placa', 'Placa obligatoria'),validarCampos, CrearVehiculo);
router.get('/Mvehiculo/:id', Vervehiculos);
router.get('/Uvehiculo/:id', check('id', 'El id no existe',).isMongoId(), Vervehiculo)
router.put('/EVehiculo/:id', check('id', 'La placa debe estar en la base de datos',).isMongoId(),editarVehiculo);
router.put('/EliVehiculo/:id', check('id', 'La placa debe estar en la base de datos',).isMongoId() ,EliminarVehiculo);


export{router}