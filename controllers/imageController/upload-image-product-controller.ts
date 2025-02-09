import { Request, Response } from "express";
import ImageService from '../../services/ImageService';
import RegisterImage from '../../Dto/imageDto/RegisterImageDto';


const uploadImageProductController = async (req: Request, res: Response) => {
  try {
    const content = req.file?.buffer;
    const fileName = req.file?.originalname;
    if (!fileName || !content) {
      return res.status(400).json({ message: "Error: Archivo no encontrado o inválido." });
    }
    const url = await ImageService.registerImage(new RegisterImage(fileName, content));
    if(!url){
      return res.status(400).json({message: 'Error al subir la imagen'});
    }
    else{
      res.status(201).json({ message: "Imagen subida correctamente.", url });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al subir la imagen."});
  }
};

export default uploadImageProductController;
