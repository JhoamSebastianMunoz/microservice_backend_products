import express from "express";
import getImageMiddleware from '../../middleware/imageMiddleware/getImageValidator';
import getImageController from "../../controllers/imageController/get-image-controller";

const router = express.Router();

// Endpoint para obtener una imagen por su nombre
router.get("/:fileName", getImageMiddleware.validatorParams, getImageMiddleware.validator, getImageController);

export default router;
