import express from "express";
import uploadImageProductController from "../../controllers/imageController/upload-image-product-controller";

const router = express.Router();

router.post("/", uploadImageProductController);

export default router;
