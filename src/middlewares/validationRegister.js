const path = require ('path');
const {body} = require ('express-validator');
const validationsRegister =[
    body('name').notEmpty().withMessage('Por favor, indica tu nombre'),
    body('lastname').notEmpty().withMessage('Indica tu apellido'),
    body('email').notEmpty().withMessage('Este Campo no puede estar vacio').bail()
    .isEmail().withMessage('Formato de correo invalido'),
    body('password').notEmpty().withMessage('Necesitas una Contraseña'),
    body('avatar').custom((value, {req}) =>{
        let file =req.file;
        let acceptedExtenssions =['.jpg', '.png', '.gif']
        if(!file){
            throw new Error ('Tienes que subir una imagen');
            
        }
        else{
            let fileExtension = path.extname(file.originalname)
            if (!acceptedExtenssions.includes(fileExtension)){
                throw new Error (`Extenciones solo permitidas${acceptedExtenssions.join(', ')}`);
        }}
        return true;
    })
]

module.exports= validationsRegister;