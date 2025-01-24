import { Request, Response } from "express";
import UploadImage from "../../repositories/AzureImageRepository";

const uploadImageProductController = async (req: Request, res: Response) => {
  try {
    const file = req.file;

    // Si el archivo no existe, el middleware ya debería haber respondido con un error.
    const url = await UploadImage.uploadToImage(file!.originalname, file!.buffer);

    res.status(201).json({ message: "Imagen subida correctamente.", url });
  } catch (error) {
    res.status(500).json({ message: "Error al subir la imagen."});
  }
};

export default uploadImageProductController;
