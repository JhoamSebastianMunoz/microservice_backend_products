import AzureBlobRepository from '../repositories/AzureImageRepository';
import RegisterImage from '../Dto/imageDto/RegisterImageDto';
import DeleteImage from '../Dto/imageDto/DeleteImageDto';
import GetImage from '../Dto/imageDto/GetImageDto';

class ImageService {
    static async registerImage(registerImage: RegisterImage){
        return await AzureBlobRepository.uploadToImage(registerImage)
    }
    static async deleteImage(deleteImage: DeleteImage){
        return await AzureBlobRepository.deleteBlob(deleteImage)
    }
    static async getImage(getImage: GetImage){
        return await AzureBlobRepository.generateSasUrl(getImage)
    }
};
export default ImageService;