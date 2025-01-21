class GetImage {
    private _url_image: string;
    
    constructor(
        url_image: string,
    ) {
        this._url_image= url_image;    
    }   

    // Getter
    get url_image(): string {
        return this._url_image;
    }

    // Setters
    set url_image(url_image: string) {
        this._url_image = url_image;
    }    
};

export default GetImage;