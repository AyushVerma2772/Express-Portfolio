import express from 'express';
import homeController from '../controllers/homeController.js';
import contactController from '../controllers/contactController.js'
import skillController from '../controllers/skillController.js'
import servicesController from '../controllers/servicesController.js'


const router = express.Router();

router.get('/', homeController);
router.get('/services', servicesController);
router.get('/skill', skillController);
router.get('/contact', contactController);

export default router;