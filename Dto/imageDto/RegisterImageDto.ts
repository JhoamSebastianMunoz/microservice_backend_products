
class RegisterImage {
    private _fileName: string;
    private _content: Buffer;

    constructor(fileName:string, content: Buffer){
        if (!fileName) throw new Error("El nombre del archivo es obligatorio.");
        if (!content || !(content instanceof Buffer)) throw new Error("El contenido del archivo es inválido.");

        this._fileName = fileName;
        this._content = content;
    }
    //get
    get fileName():string{
        return this._fileName;
    }
    get content(): Buffer{
        return this._content;
    };
    //set
    set fileName(fileName:string){
        this._fileName = fileName;
    }
    set content(content: Buffer){
        this._content = content;
    };
};
export default RegisterImage;