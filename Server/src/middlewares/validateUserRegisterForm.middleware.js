const path = require('path');
const { body } = require('express-validator');

const validationsRegister = [
    body('firstname').notEmpty().withMessage('Por favor, indica tu nombre'),
    body('lastname').notEmpty().withMessage('Indica tu apellido'),
    body('username').notEmpty().withMessage('Por favor,  nombre de usuario'),
    body('email').notEmpty().withMessage('Este Campo no puede estar vacío').bail()
        .isEmail().withMessage('Formato de correo invalido'),
    body('password').notEmpty().withMessage('Necesitas una Contraseña').bail()
        .isLength({ min: 8 }).withMessage('La contraseña debe tener mínimo 8 caracteres'),
    body('country').notEmpty().withMessage('Necesitas codigo de tu pais'),
    body('phone').notEmpty().withMessage('Falta tu numero de Telefono'),
    body('address').notEmpty().withMessage('Necesitas una direccion de Domicilio'),
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
