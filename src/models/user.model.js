const fs = require('fs');
const path = require('path');

const userModel = {
    readAdminUsers: function(){
			const pathResolve = path.resolve('src/data/adminUsers.json')
			const readFile =  fs.readFileSync(pathResolve);
			return JSON.stringify(readFile);
    }
}
module.exports = userModel;
