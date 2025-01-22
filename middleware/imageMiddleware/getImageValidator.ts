

import {check, validationResult} from  'express-validator';
import {Request,Response, NextFunction} from 'express';

let validatorParams =[
    check('url').isLength({min:1}).withMessage('El id del producto debe contener mínimo 1 caracter').withMessage('Ingrese un número de id válido, en números').bail()
];

function validator(req:Request,res:Response,next:NextFunction){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }
    next();
}

export default {
    validatorParams,
    validator
}