import AzureImageRepository from '../repositories/AzureImageRepository';
import RegisterImage from '../Dto/imageDto/RegisterImageDto';
import DeleteImage from '../Dto/imageDto/DeleteImageDto';
import GetImage from '../Dto/imageDto/GetImageDto';

class ImageService {
    static async registerImage(registerImage: RegisterImage){
        return await AzureImageRepository.uploadToImage(registerImage)
    }
    static async deleteImage(deleteImage: DeleteImage){
        return await AzureImageRepository.deleteBlob(deleteImage)
    }
    static async getImage(getImage: GetImage){
        return await AzureImageRepository.generateSasUrl(getImage)
    }
};
export default ImageService;