import { Request, Response } from "express";
import AzureBlobService from "../../services/AzureBlobStorageGetService";

const getImageController = async (req: Request, res: Response) => {
  const { imageName } = req.params;
  if (!imageName) {
    return res.status(400).json({ message: "El nombre de la imagen es requerido." });
  }

  try {
    const sasUrl = await AzureBlobService.generateSasUrl(imageName);
    res.status(200).json({ message: "Imagen obtenida correctamente", url: sasUrl });
  } catch (error) {
    console.error("Error al obtener la imagen:", error);
    res.status(500).json({ message: "No se pudo obtener la imagen." });
  }
};

export default getImageController;
