import multer from "multer";
import { Request, Response, NextFunction } from "express";

const upload = multer({
  limits: { fileSize: 6 * 1024 * 1024 }, // 6 MB
});

const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif", "image/jfif", "image/webp"];

function uploadMiddleware(req: Request, res: Response, next: NextFunction) {
    upload.single("image")(req, res, (err) => {
        if (err) {
            if (err.code === "LIMIT_FILE_SIZE") {
                return res.status(413).json({ message: "El archivo es demasiado grande. Máximo 6MB." });
            }
            return res.status(500).json({ message: "Error al procesar la imagen", error: err.message });
        }

    const file = req.file;

    if (!file) {
        return res.status(400).json({ message: "No se proporcionó ninguna imagen." });
    }

    // Validar formato de archivo
    if (!allowedMimeTypes.includes(file.mimetype)) {
        return res.status(400).json({ message: "Formato de archivo no permitido." });
    } 

    next();
    });
};

export default uploadMiddleware;
