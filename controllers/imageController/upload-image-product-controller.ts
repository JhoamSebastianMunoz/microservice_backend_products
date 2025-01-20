import { Request, Response } from "express";
import multer from "multer";
import UploadImage from "../../services/AzureBlobStorageService";

const upload = multer({
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
});


const uploadImageProductController = async (req: Request, res: Response) => {
  upload.single("image")(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "Error al procesar la imagen", error: err.message });
    }

    try {
      const file = req.file;

      if (!file) {
        return res.status(400).json({ message: "No se proporcionó ninguna imagen." });
      }

      // Validar formato de archivo (opcional)
      const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif", "image/jfif", "image/webp"];
      if (!allowedMimeTypes.includes(file.mimetype)) {
        return res.status(400).json({ message: "Formato de archivo no permitido." });
      }

      const url = await UploadImage.uploadToImage(file.originalname, file.buffer);
      res.status(201).json({ message: "Imagen subida correctamente", url });
    } catch (error) {
      res.status(500).json({ message: "Error al subir la imagen" });
    }
  });
};

export default uploadImageProductController;
