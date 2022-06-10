function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false
	console.log(req.session)
	console.log("================")
	console.log(req.session.userLogged)
	console.log("######################")
	if (req.session && req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
		console.log(res.locals.userLogged.roles_id)
		console.log("***********************")
		console.log(res.locals)
	}
	next();
}

module.exports = userLoggedMiddleware;
