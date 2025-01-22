import { Request, Response } from "express";
import AzureBlobService from "../../repositories/AzureImageRepository";

const deleteImageProductController = async (req: Request, res: Response) => {
  try {
    const { fileName } = req.body;

    if (!fileName) {
      return res.status(400).json({ message: "El parámetro 'fileName' es obligatorio." });
    }

    // Llamar al servicio para eliminar la imagen
    await AzureBlobService.deleteBlob(fileName);

    res.status(200).json({ message: `La imagen '${fileName}' se eliminó correctamente.` });
  } catch (error) {
    console.error("Error al eliminar la imagen:", error);
    res.status(500).json({ message: "Error al eliminar la imagen." });
  }
};

export default deleteImageProductController;
