import express from 'express';
import getImageValidator from '../../middleware/';
import getImageController from '../../controllers/imageController/get-image-controller';



const router = express.Router();

router.get('/:url_image', getImageController);


export default router;