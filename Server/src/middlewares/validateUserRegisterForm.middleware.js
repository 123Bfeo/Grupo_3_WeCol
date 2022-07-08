const path = require('path');
const { body } = require('express-validator');

const validationsRegister = [
    body('firstname').notEmpty().withMessage('Por favor, indica tu nombre').bail()
        .isLength({ min: 2 }).withMessage('Debe tener mínimo 2 caracteres '),
    body('lastname').notEmpty().withMessage('Indica tu apellido').bail()
        .isLength({ min: 2 }).withMessage('Debe tener mínimo 2 caracteres '),
    body('username').notEmpty().withMessage('Por favor,  nombre de usuario'),
    body('email').notEmpty().withMessage('Este Campo no puede estar vacío').bail()
        .isEmail().withMessage('Formato de correo inválido'),
    body('password').notEmpty().withMessage('Necesitas una Contraseña').bail()
        .isLength({ min: 8 }).withMessage('La contraseña debe tener mínimo 8 caracteres'),
    body('country').notEmpty().withMessage('Necesitas código de tu país'),
    body('phone').notEmpty().withMessage('Falta tu número de teléfono'),
    body('address').notEmpty().withMessage('Necesitas una dirección de Domicilio'),
    body('avatar').custom((value, { req }) => {
        const file = req.file;
        const acceptedExtensions = ['.jpg', '.png', '.gif']
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        }
        else {
            const fileExtension = path.extname(file.originalname)
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`Extensiones permitidas ${acceptedExtensions.join(', ')}`);
            }
        }
        return true;
    })
]

module.exports = validationsRegister;
