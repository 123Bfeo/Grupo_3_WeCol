const path = require('path');
const multer = require('multer');

const fileMiddleware = {

    addFile: ()=>{
        const storage = multer.diskStorage({
            destination:(req,file,cb)=>{
                const dest = path.resolve('public/img');
                cb(null, dest); 
            },
            filename:(req,file,cb)=>{
                const name = Date.now()+'_'+path.extname(file.originalname);
                cb(null, name);
            }
        });       
        const upload = multer({
            storage : storage,
            fileFilter: (req, file, cb) => {
                if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
                  cb(null, true);
                } else {
                  return cb(null, false,new Error('Only .png, .jpg and .jpeg format allowed!'));
                }
              }});
        return upload;
    }


}

module.exports = fileMiddleware;

