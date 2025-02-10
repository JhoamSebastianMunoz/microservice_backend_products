import express from "express";
import uploadImageMiddleware from "../../middleware/imageMiddleware/registerImageValidator"
import uploadImageProductController from "../../controllers/imageController/upload-image-product-controller";

const router = express.Router();

router.post("/", uploadImageMiddleware,uploadImageProductController);

export default router;
