const { resolve, extname } = require('path');
const multer = require('multer');

const productImageMiddleware = {
	addFile: ()=>{
		const storage = multer.diskStorage({
			destination:(req,file,cb)=>{
				const dest = resolve('public/img');
				cb(null, dest);
			},
			filename:(req,file,cb)=>{
				const name = Date.now() +'_' + extname(file.originalname);
				cb(null, name);
			}
		});
		return multer({
			storage : storage,
			fileFilter: (req, file, cb) => {
				if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
					cb(null, true);
				} else {
					return cb(null, false,new Error('Only .png, .jpg and .jpeg format allowed!'));
				}
			}
		});
	}
};

module.exports = productImageMiddleware;