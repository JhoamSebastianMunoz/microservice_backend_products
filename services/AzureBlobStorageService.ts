import blobServiceClient from "../config/config-azureStorage";

// Validamos que containerName no sea undefined
const containerName: string = process.env.AZURE_STORAGE_CONTAINER_NAME as string;

if (!containerName) {
  throw new Error("El nombre del contenedor (AZURE_STORAGE_CONTAINER_NAME) no está configurado en el archivo .env");
};

class UploadImage {
  static async uploadToImage(fileName: string, content: Buffer): Promise<string> {
    try {
      const containerClient = blobServiceClient.getContainerClient(containerName); // Aquí containerName es seguro
      const blockBlobClient = containerClient.getBlockBlobClient(fileName);

      // Subir el archivo al blob
      await blockBlobClient.upload(content, content.length);

      // Devolver la URL del archivo subido
      return `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${containerName}/${fileName}`;
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      throw new Error("No se pudo subir la imagen a Azure Blob Storage.");
    }
  }
};

export default UploadImage;
