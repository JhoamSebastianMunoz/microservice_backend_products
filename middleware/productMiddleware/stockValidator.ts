import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

// Validaciones para el registro de stock
const stockValidator = [
    check('cantidad_ingresada')
        .isInt({ min: 1 }).withMessage('La cantidad ingresada debe ser un número entero positivo').bail(),

    check('fecha_vencimiento')
        .optional()
        .custom((value) => {
            if (value === '' || value === null) return true; // Permitir vacío o NULL
            const fechaRegex = /^\d{4}-\d{2}-\d{2}$/; // Formato YYYY-MM-DD
            if (!fechaRegex.test(value)) {
                throw new Error('La fecha de vencimiento debe tener el formato YYYY-MM-DD');
            }
            const fechaIngresada = new Date(value);
            const fechaActual = new Date();
            if (fechaIngresada < fechaActual) {
                throw new Error('La fecha de vencimiento no puede ser en el pasado');
            }
            return true;
        }).bail(),

    check('codigo_factura')
    .notEmpty().withMessage('El código de factura es obligatorio').bail(),    

    check('costo_total')
        .isFloat({ min: 0.01 }).withMessage('El costo total debe ser un número positivo mayor que 0').bail(),

    check('costo_unitario')
        .isFloat({ min: 0.01 }).withMessage('El costo unitario debe ser un número positivo mayor que 0').bail(),

    check('porcentaje_venta')
        .isFloat({ min: 0, max: 100 }).withMessage('El porcentaje de venta debe estar entre 0 y 100').bail(),
];

// Middleware para manejar los errores de validación
function validarStock(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

export default {
    stockValidator,
    validarStock
};
