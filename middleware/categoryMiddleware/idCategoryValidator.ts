import { check, validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";

let validatorParams = [
    check("id_categoria")
        .isNumeric()
        .withMessage("El ID de la categoría debe ser un número válido.")
        .bail()
        .notEmpty()
        .withMessage("El ID de la categoría es obligatorio.")
        .bail(),
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
