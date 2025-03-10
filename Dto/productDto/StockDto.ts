class StockDto {
    private _id_producto: number;
    private _cantidad_ingresada: number;
    private _fecha_vencimiento: string  | null;
    private _codigo_factura: string;
    private _costo_total: number;
    private _costo_unitario: number;
    private _porcentaje_venta: number;

    constructor(
        id_producto: number,
        cantidad_ingresada: number,
        fecha_vencimiento: string  | null,
        codigo_factura: string,
        costo_total: number,
        costo_unitario: number,
        porcentaje_venta: number
    ) {
        this._id_producto = id_producto;
        this._cantidad_ingresada = cantidad_ingresada;
        this._fecha_vencimiento = fecha_vencimiento; 
        this._codigo_factura = codigo_factura; 
        this._costo_total = costo_total; 
        this._costo_unitario = costo_unitario; 
        this._porcentaje_venta = porcentaje_venta; 
        }
        
    // Getters
    get id_producto(): number {
        return this._id_producto;
    }
    get cantidad_ingresada(): number {
        return this._cantidad_ingresada;
    }
    get fecha_vencimiento(): string  | null {
        return this._fecha_vencimiento;
    }
    get codigo_factura():string {
        return this._codigo_factura;
    }
    get costo_total(): number {
        return this._costo_total;
    }
    get costo_unitario(): number {
        return this._costo_unitario;
    }
    get porcentaje_venta():number {
        return this._porcentaje_venta;
    }
    // Setters
    set id_producto(id_producto: number) {
        this._id_producto = id_producto;
    }
    set cantidad_ingresada(cantidad_ingresada: number) {
        this._cantidad_ingresada = cantidad_ingresada;
    }
    set fecha_vencimiento(fecha_vencimiento: string  | null) {
        this._fecha_vencimiento = fecha_vencimiento;
    }
    set codigo_factura(codigo_factura: string) {
        this._codigo_factura = codigo_factura;
    }
    set costo_total(costo_total: number) {
        this._costo_total = costo_total;
    }
    set costo_unitario(costo_unitario: number) {
        this._costo_unitario = costo_unitario;
    }
    set porcentaje_venta(porcentaje_venta: number) {
        this._porcentaje_venta = porcentaje_venta;
    }
};

export default StockDto;