import {
  BlobSASPermissions,
  BlobSASSignatureValues,
  generateBlobSASQueryParameters,
  StorageSharedKeyCredential, // Asegúrate de importar esto
} from "@azure/storage-blob";
import blobServiceClient from "../config/config-azureStorage";

const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME as string;

class AzureBlobService {
  static async generateSasUrl(fileName: string): Promise<string> {
    try {
      const containerClient = blobServiceClient.getContainerClient(containerName);
      const blobClient = containerClient.getBlobClient(fileName);

      // Verificar si el blob existe
      const exists = await blobClient.exists();
      if (!exists) {
        throw new Error(`La imagen con el nombre ${fileName} no existe.`);
      }

      // Configurar permisos SAS
      const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME as string;
      const accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY as string;

      const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);

      const sasOptions: BlobSASSignatureValues = {
        containerName,
        blobName: fileName,
        permissions: BlobSASPermissions.parse("r"), // Permiso de lectura
        startsOn: new Date(), // Inicio inmediato
        expiresOn: new Date(new Date().valueOf() + 3600 * 1000), // Expira en 1 hora
      };

      // Generar el token SAS
      const sasToken = generateBlobSASQueryParameters(sasOptions, sharedKeyCredential).toString();

      // Construir y devolver la URL SAS
      return `${blobClient.url}?${sasToken}`;
    } catch (error) {
      console.error("Error al generar la URL SAS:", error);
      throw new Error("No se pudo generar la URL SAS para el blob.");
    }
  }
}

export default AzureBlobService;
