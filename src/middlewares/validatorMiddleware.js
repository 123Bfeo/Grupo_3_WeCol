const { body } = require('express-validator');

const validatorMiddleware = {
	createProduct() {
		return [
			body('name').notEmpty().withMessage('Diligencie el campo nombre').bail(),
			body('price').notEmpty().withMessage('Diligencie el campo precio').bail()
													.isFloat().withMessage('Ingrese un valor numérico para el precio'),
			body('description').notEmpty().withMessage('Diligencie el campo descripción')
        ];
    },
	loginUser() {
		return [
			body('email').notEmpty().withMessage('Diligencie el campo email').bail().isEmail().withMessage('Ingrese un email válido'),
			body('password').notEmpty().withMessage('Diligencie el campo Contraseña').bail().isLength({min: 8}).withMessage('La contraseña debe tener mínimo 8 caracteres')
		];
	}
}

module.exports = validatorMiddleware;
