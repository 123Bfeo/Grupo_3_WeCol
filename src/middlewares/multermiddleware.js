const multer = require ('multer');
const path = require ('path');

let multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
     let profile = path.join(__dirname, '../../public/Profile-users');
     cb(null, profile);
    },

    filename:(req, file, cb) => {
      let nameProfile = Date.now() + path.extname(file.originalname)
      cb(null,  nameProfile);
    }
})
module.exports= multerDiskStorage;