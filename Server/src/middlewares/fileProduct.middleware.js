const multer = require ('multer');
const { join, extname } = require ('path');

const fileProduct = multer.diskStorage({
	destination: (req, file, callback) => {
		const profile = join(__dirname, '../../public/img/products');
		callback(null, profile);
	},
	
	filename:(req, file, callback) => {
		const nameProfile = Date.now() + extname(file.originalname)
		callback(null,  nameProfile);
	}
})

module.exports = fileProduct;
