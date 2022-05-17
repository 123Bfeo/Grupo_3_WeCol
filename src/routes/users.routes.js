const express = require('express');
const multer = require('multer');

const router = express.Router();

const multerDiskStorageMiddleware = require('../middlewares/multerDiskStorage.middleware');
const sessionDetectMiddleware = require('../middlewares/sessionDetect.middleware');
const validateUserRegisterFormMiddleware = require('../middlewares/validateUserRegisterForm.middleware')
const validateUserLoginFormMiddleware = require('../middlewares/validateUserLoginForm.middleware');

const fileUpload = multer({ storage: multerDiskStorageMiddleware });

const userController = require('../controllers/user.controller');

router.get('/login', sessionDetectMiddleware, userController.login);
router.post('/login', validateUserLoginFormMiddleware, userController.loginUser);
//userRoutes.post('/login',validatorLoginUser,userController.loginUser);

router.get('/register', sessionDetectMiddleware, userController.register);
router.post('/register', fileUpload.single("avatar"), validateUserRegisterFormMiddleware, userController.processRegister);

router.get('/logout', userController.logout);

module.exports = router;