import { Request, Response } from "express";
import ImageService from '../../services/ImageService';
import DeleteImage from '../../Dto/imageDto/DeleteImageDto';

const deleteImageProductController = async (req: Request, res: Response) => {
  try {
    const { fileName } = req.body;

    // Validar que fileName sea una cadena válida
    if (!fileName || typeof fileName !== "string" || fileName.trim() === "") {
      return res.status(400).json({ message: "El parámetro 'fileName' es obligatorio y debe ser una cadena válida." });
    }

    // Llamar al servicio para eliminar la imagen
    const result = await ImageService.deleteImage({ fileName } as DeleteImage);

    return res.status(200).json({ message: `La imagen '${fileName}' se eliminó correctamente.` });

  } catch (error) {
    console.error("Error al eliminar la imagen:", error);
    return res.status(500).json({ message: "Error interno al eliminar la imagen." });
  }
};

export default deleteImageProductController;
