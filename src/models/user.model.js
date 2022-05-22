const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');


const userModel = {
	fileName: './src/data/naturalUsers.json',

	getNaturalUser: function () {
		return JSON.parse(readFileSync(this.fileName, "utf-8"));
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
		writeFileSync(this.fileName, JSON.stringify(allNaturalUsers, null, ' '));
		return true;
	},

	searchNaturalUserId: function (id) {
		const allNaturalUsers = this.listNaturalUsers();
		return allNaturalUsers.find(user => user.id === id);
	},

	searchNaturalUserEmail: function (text, field = "email") {
		const allNaturalUsers = this.listNaturalUsers();
		return allNaturalUsers.find(user => user[field] === text);
	},

	deleteNaturalUsers: function (id) {
		const allNaturalUsers = this.listNaturalUsers();
		const deleteUser = allNaturalUsers.filter(user => user.id !== id);
		writeFileSync(this.fileName(), JSON.stringify(deleteUser, null, ' '));
		return "User Delete";
	}
}
module.exports = userModel;