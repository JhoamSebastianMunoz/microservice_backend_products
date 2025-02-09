class DeleteImageDto{
    private _fileName : string;

    constructor(fileName: string){
        this._fileName = fileName
    }
    //get
    get fileName():string{
        return this._fileName;
    }
    //set
    set fileName(fileName:string){
        this._fileName = fileName;
    }
};

export default DeleteImageDto;