import express from "express";
import UploadImageMiddleware from "../../middleware/imageMiddleware/registerImageValidator"
import uploadImageProductController from "../../controllers/imageController/upload-image-product-controller";

const router = express.Router();

router.post("/", UploadImageMiddleware,uploadImageProductController);

export default router;
