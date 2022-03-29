
const {body} = require('express-validator');

const validatorMiddleware = {

    createProduct: function(){
        const validate = [
            body('name').notEmpty().withMessage('Diligencie el campo nombre').bail(),
            body('price').notEmpty().withMessage('Diligencie el campo precio').bail()
                         .isFloat().withMessage('Ingrese un valor numerico para el precio'),
            body('description').notEmpty().withMessage('Diligencie el campo descripción')
        ];

        return validate;
    },
    loginUser: function(){
        const validate = [
            body('email').notEmpty().withMessage('Diligencie el campo E-mail').bail()
                         .isEmail().withMessage('Ingrese un email válido'),
            body('password').notEmpty().withMessage('Diligencie el campo Contraseña').bail()
                            .isLength({min : 8}).withMessage('La contraseña debe tener minimo 8 caracteres')
        ];

        return validate;
    }
}

module.exports = validatorMiddleware;