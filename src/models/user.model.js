const fs = require('fs');
const path = require('path');

const userModel = {
    readAdminUsers: function(){
        const adminUsers = JSON.parse(fs.readFileSync(path.resolve('src/data/adminUsers.json')));
        return adminUsers;
    }
}

module.exports = userModel;
