import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

let validatorParams = [
    check('id_producto').isLength({min:1}).withMessage('El id del producto debe contener mínimo 1 caracter').isNumeric().withMessage('Ingrese un número de id válido, en números').bail(),
    check('nombre_producto').isLength({ min: 2, max: 120})
    .withMessage('Ingrese un nombre de producto entre 2 a 120 caracteres').bail(),
    check('precio').isLength({min:2, max:12}).withMessage('E valor del precio debe estar entre 2 a 12 caracteres') 
    .isNumeric().withMessage('Ingrese el precio en números, acepta decimal').bail(),
    check('descripcion').isLength({max:255}).withMessage('La descripción es opcional con hasta 255 caracteres permitidos').optional().bail(),
    check('cantidad_ingreso').isNumeric().withMessage('Ingrese el número de productos que quiere ingresar al invetario, en números, No letras').optional().bail(),
    check('id_imagen').isString().optional(),
];
    
    function validator(req: Request, res: Response, next: NextFunction) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }
    
    


    export default {
    validatorParams,
    validator
};