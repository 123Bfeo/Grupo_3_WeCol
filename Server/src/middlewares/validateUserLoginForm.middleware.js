const { body } = require('express-validator');

const validationsLogin = [
  body('email').notEmpty().withMessage('Diligencie el campo email').bail()
    .isEmail().withMessage('Ingrese un email válido'),
  body('password').notEmpty().withMessage('Diligencie el campo Contraseña').bail()
    .isLength({ min: 8 }).withMessage('La contraseña debe tener mínimo 8 caracteres')
];

module.exports = validationsLogin;
