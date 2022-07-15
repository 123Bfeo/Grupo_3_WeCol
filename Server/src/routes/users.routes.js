const express = require('express');
const multer = require('multer');

const router = express.Router();

const multerDiskStorageMiddleware = require('../middlewares/multerDiskStorage.middleware');
const sessionDetectMiddleware = require('../middlewares/sessionDetect.middleware');
const validateUserRegisterFormMiddleware = require('../middlewares/validateUserRegisterForm.middleware')
const validateUserLoginFormMiddleware = require('../middlewares/validateUserLoginForm.middleware');

const fileUpload = multer({ storage: multerDiskStorageMiddleware });

const userController = require('../controllers/user.controller');

//cerrar sesion
router.get('/logout', userController.logout);
// Todos los user

//vista de login y envio de formulario
router.get('/login', sessionDetectMiddleware, userController.login);
router.post('/login', validateUserLoginFormMiddleware, userController.processlogin);
//vista de formulario y envio de formulario
router.get('/register', sessionDetectMiddleware, userController.register);
router.post('/register', fileUpload.single("avatar"), validateUserRegisterFormMiddleware, userController.processRegister);
// eliminar un usuario
//router.delete('/delete/:id', userController.deleteUser);
//vista actualizar y enviar datos de usuario
//router.get('/edit/:id', userController.editUser)
//router.put('/edit/:id', userController.updateUser)

//router.get('/users', userController.users);
// sessionDetectMiddleware,

module.exports = router;

