import { Router } from 'express';
import { check } from 'express-validator';
import { validarCampos } from '../middleware/validar';
import { crearCita, crearCliente, elminaCita, verTalleres, verCitasCliente} from '../controllers';



const router = Router();
router.get('/talleres',verTalleres);
router.get('/vCita/:id', verCitasCliente);
router.get('/existe');
router.put('/dcita/:id',elminaCita);
router.post('/ncliente', crearCliente);
router.post('/ncita',crearCita);


export{router};