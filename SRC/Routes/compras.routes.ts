import { Router } from 'express';
import {CrearCompra, CrearDetalladoCompra, ObtenerCompraID, ObtenerCompra} from '../Controller/compras.controller';
import { DetalladoCompra } from '../Models/DetalladoCompra';

const router = Router();

router.get('/equipo-1/purchases', ObtenerCompra);
router.get('/equipo-1/purchases/:id', ObtenerCompraID);
router.post('/equipo-1/purchases', CrearCompra);
router.post('/equipo-1/purchases/:id', CrearDetalladoCompra);



export default router;
