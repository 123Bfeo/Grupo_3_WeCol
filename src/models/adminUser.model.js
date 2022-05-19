const fs = require('fs');


const AdminModel = {
    fileName: './src/data/adminUsers.json',
    getAdminData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
    },

    generateIdAdmin: function () {
        const allAdminlUsers = this.listAdminUsers();
        const lastIdUser = allAdminlUsers.pop();
        if (lastIdUser) {
            return lastIdUser.id + 1;
        }
        return 1;
    },

    listAdminUsers: function () {
        return this.getAdminData();
    },

    createAdminlUsers: function (dataAdminlUser) {
        const allAdminlUsers = this.listAdminUsers();
        const newAdminUser = {
            id: this.generateIdAdmin(),
            ...dataAdminlUser
        }
        const validation = newAdminUser.email.indexOf('@wecol.com')

        if (validation != -1) {
            allAdminlUsers.push(newAdminUser);
            fs.writeFileSync(this.fileName, JSON.stringify(allAdminlUsers, null, ' '));
            return true;
        }
        else {
            return false;
        }

    },
    searchAdminUserId: function (id) {
        const allAdminlUsers = this.listAdminUsers();
        return allAdminlUsers.find(adminUser => adminUser.documentID === id);
    },

    searchAdminUserEmail: function (text, field = "email") {
        const allAdminUsers = this.listAdminUsers();
        return allAdminUsers.find(user => user[field] === text);
    }
}

module.exports = AdminModel;
//console.log(AdminModel.listAdminUsers())
/*console.log(AdminModel.createAdminlUsers({
    name: "maicol",
    lastname: "bernet",
    email: "mai@wecol.com",
    password: "mai123"
}))*/

//console.log(AdminModel.searchAdminUserId("1040183295"));
//console.log(AdminModel.generateIdAdmin())
//console.log(AdminModel.searchAdminUserEmail("sergio.gonzalez@wecol.com"))