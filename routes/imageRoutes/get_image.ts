import express from "express";
import getImageController from "../../controllers/imageController/get-image-controller";

const router = express.Router();

// Endpoint para obtener una imagen por su nombre
router.get("/:imageName", getImageController);

export default router;
