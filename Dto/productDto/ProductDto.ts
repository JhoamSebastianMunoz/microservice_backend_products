class Product {
    
    private _nombre_producto: string;
    private _precio: number;
    private _descripcion: string;
    private _cantidad_ingreso: number;

    constructor(
        nombre_producto: string, precio: number,
        descripcion: string, cantidad_ingreso: number
    ) {
        this._nombre_producto = nombre_producto;
        this._precio = precio;
        this._descripcion = descripcion;
        this._cantidad_ingreso = cantidad_ingreso;
        }
        
    // Getters
    get nombre_producto(): string {
        return this._nombre_producto;
    }
    get precio(): number {
        return this._precio;
    }
    get descripcion(): string {
        return this._descripcion;
    }
    get cantidad_ingreso(): number {
        return this._cantidad_ingreso;
    }
    // Setters
    set nombre_producto(nombre_producto: string) {
        this._nombre_producto = nombre_producto;
    }
    set precio(precio: number) {
        this._precio = precio;
    }
    set descripcion(descripcion: string) {
        this._descripcion = descripcion;
    }
    set cantidad_ingreso(cantidad_ingreso: number) {
        this._cantidad_ingreso = cantidad_ingreso;
    }
};

export default Product;