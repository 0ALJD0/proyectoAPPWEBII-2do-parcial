import { Router } from 'express';
import { check } from 'express-validator';
import { validarCampos } from '../middleware/validar';
import { editarTaller, crearTaller, verCitasRepre } from '../controllers';
const router = Router();

router.get('/cita', verCitasRepre);
router.post('/ntaller',[check('NombreTaller','El nombre es obligatorio').not().isEmpty(),validarCampos],crearTaller);
router.put('/etaller/:id',editarTaller);
export{router};