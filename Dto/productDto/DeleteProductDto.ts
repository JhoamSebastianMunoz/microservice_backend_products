class DeleteProduct {
    
    private _id_producto: string;
    
    constructor(
        id_producto: string,
    ) {
        this._id_producto= id_producto;    
    }   

    // Getter
    get id_producto(): string {
        return this._id_producto;
    }

    // Setters
    set id_producto(id_producto: string) {
        this._id_producto = id_producto;
    }    
}

export default DeleteProduct;