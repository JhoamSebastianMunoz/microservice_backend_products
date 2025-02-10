import { v4 as uuid } from 'uuid';
import blobServiceClient from "../config/config-azureStorage";
import RegisterImage from '../Dto/imageDto/RegisterImageDto';
import DeleteImage from '../Dto/imageDto/DeleteImageDto';
import GetImage from '../Dto/imageDto/GetImageDto';

import {
    BlobSASPermissions,
    BlobSASSignatureValues,
    generateBlobSASQueryParameters,
    StorageSharedKeyCredential, 
    } from "@azure/storage-blob";


const containerName: string = process.env.AZURE_STORAGE_CONTAINER_NAME as string;

if (!containerName) {
    throw new Error("El nombre del contenedor (AZURE_STORAGE_CONTAINER_NAME) no está configurado en el archivo .env");
};

class AzureBlobRepository {
    static async uploadToImage(registerImage: RegisterImage): Promise<string> {
        try {
            if (!registerImage.fileName || !registerImage.content) {
                throw new Error("El nombre del archivo o el contenido están vacíos.");
            }

            let fileId = uuid();
            fileId += `.${registerImage.fileName.split(".").pop()}`;

            const containerClient = blobServiceClient.getContainerClient(containerName);
            const blockBlobClient = containerClient.getBlockBlobClient(fileId);

            await blockBlobClient.upload(registerImage.content, registerImage.content.length);

            return `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${containerName}/${fileId}`;
        } catch (error) {
            console.error("Error al subir la imagen:", error);
            throw new Error("No se pudo subir la imagen a Azure Blob Storage.");
        }
    }

    static async generateSasUrl(getImage: GetImage): Promise<string> {
        try {
            const containerClient = blobServiceClient.getContainerClient(containerName);
            const blobClient = containerClient.getBlobClient(getImage.fileName);
        // Verificar si el blob existe
            const exists = await blobClient.exists();
            if (!exists) {
            throw new Error(`La imagen con el nombre ${getImage.fileName} no existe.`);
            }
        // Configurar permisos SAS
            const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME as string;
            const accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY as string;

            const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);

            const sasOptions: BlobSASSignatureValues = {
            containerName,
            blobName: getImage.fileName,
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

    static async deleteBlob(deleteImage: DeleteImage): Promise<void> {
        try {
            const containerClient = blobServiceClient.getContainerClient(containerName);
            const blobClient = containerClient.getBlobClient(deleteImage.fileName);

            const exists = await blobClient.exists();
            if (!exists) {
            throw new Error(`La imagen con el nombre '${deleteImage.fileName}' no existe en el contenedor.`);
            }

            await blobClient.delete();
        } catch (error) {
            console.error("Error al eliminar la imagen:", error);
            throw new Error("No se pudo eliminar la imagen de Azure Blob Storage.");
        }
    }
};

export default AzureBlobRepository ;
