class Categoria {
    
    private _nombre_categoria: string;
    
    constructor(
        nombre_categoria: string,
    ) {
        this._nombre_categoria = nombre_categoria;
    }   

    // Getter
    get nombre_categoria(): string {
        return this._nombre_categoria;
    }

    // Setters
    set nombre_categoria(nombre_categoria: string) {
        this._nombre_categoria = nombre_categoria;
    }  
}

export default Categoria;