import { Router } from 'express'
import { getAllDeportes, createDeporte, updateDeporte, removeDeporte } from '../controllers/deportes.controller.js'

const router = Router()

router.get('/deportes', getAllDeportes)
router.post('/agregar', createDeporte)
router.put('/editar/:id', updateDeporte)
router.delete('/eliminar/:id', removeDeporte)

export default router;