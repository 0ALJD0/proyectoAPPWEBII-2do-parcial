import { Router } from 'express';
import { check } from 'express-validator';
import { validarCampos } from '../middleware/validar';
import { crearCita, elminaCita, verCitasCliente } from '../controllers';


const router = Router();
router.get('/talleres');
router.get('/vCita', verCitasCliente);
router.put('/dcita/:id',elminaCita);
router.post('/ncliente');
router.post('/nvehiculo');
router.post('/ncita',crearCita);


export{router};