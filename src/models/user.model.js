const fs = require('fs');
const { resolve } = require('path');


const userModel = {
	getAdminUsers: () => {
		const fileName = resolve('src/data/adminUsers.json')
		const readFile = readFileSync(fileName);
		return JSON.stringify(readFile);
	},
	//---------------------------//

	fileName: './src/data/naturalUsers.json',

	getNaturalUser: function () {
		return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
	},

	generateId: function () {
		const allNaturalUsers = this.listNaturalUsers();
		const lastIdUser = allNaturalUsers.pop();
		if (lastIdUser) {
			return lastIdUser.id + 1;
		}
		return 1;
	},

	listNaturalUsers: function () {
		return this.getNaturalUser();
	},

	createNaturalUsers: function (dataNaturalUser) {
		const allNaturalUsers = this.listNaturalUsers();
		const newNaturalUser = {
			id: this.generateId(),
			...dataNaturalUser
		}
		allNaturalUsers.push(newNaturalUser);
		fs.writeFileSync(this.fileName, JSON.stringify(allNaturalUsers, null, ' '));
		return true;
	},

	searchNaturalUserId: function (id) {
		const allNaturalUsers = this.listNaturalUsers();
		const searchNaturalUserId = allNaturalUsers.find(user => user.id === id);
		return searchNaturalUserId;
	},

	searchNaturalUserEmail: function (text, field = "email") {
		const allNaturalUsers = this.listNaturalUsers();
		const searchNaturalUser = allNaturalUsers.find(user => user[field] === text);
		return searchNaturalUser;
	},

	deleteNaturalUsers: function (id) {
		const allNaturalUsers = this.listNaturalUsers();
		const deleteUser = allNaturalUsers.filter(user => user.id != id);
		fs.writeFileSync(this.fileName(), JSON.stringify(deleteUser, null, ' '));
		return "User Delete";
	}

}
module.exports = userModel;

//console.log(userModel.searchNaturalUserEmail("luis@gmail.com"));
//console.log(userModel.getNaturalUser())
//console.log(userModel.listNaturalUsers());
//console.log(userModel.searchNaturalUserId(3));
//console.log(userModel.searchNaturalUserEmail("jo@gmail.com"));
/*console.log(userModel.createNaturalUsers(

{
  name: "fernanda",
  lastname: "perez",
  email: "fer@gmail.com",
  password: "fer123"
}
))*/