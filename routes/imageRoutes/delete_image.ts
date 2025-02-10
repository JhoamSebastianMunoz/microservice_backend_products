import express from "express";
import deleteImageMiddleware from '../../middleware/imageMiddleware/deleteImageValidator';
import deleteImageController from "../../controllers/imageController/delete-image-controller";

const router = express.Router();

// Ruta DELETE para eliminar imágenes
router.delete("/",deleteImageMiddleware.validatorParams, deleteImageMiddleware.validator ,deleteImageController);

export default router;
