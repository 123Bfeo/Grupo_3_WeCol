const { body } = require('express-validator');

const validateCreateProductFormMiddleware = {
	createProduct() {
		return [
			body('name').notEmpty().withMessage('Diligencie el campo nombre').bail(),
			body('price').notEmpty().withMessage('Diligencie el campo precio').bail()
				.isFloat().withMessage('Ingrese un valor numérico para el precio'),
			body('description').notEmpty().withMessage('Diligencie el campo descripción')
		];
	}
}

module.exports = validateCreateProductFormMiddleware;
