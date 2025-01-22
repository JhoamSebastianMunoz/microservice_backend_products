import express from "express";
import deleteImageController from "../../controllers/imageController/delete-image-controller";

const router = express.Router();

// Ruta DELETE para eliminar imágenes
router.delete("/", deleteImageController);

export default router;
