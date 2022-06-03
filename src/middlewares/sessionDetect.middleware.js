function sessionDetectMiddleware(req, res, next) {
	if (req.session.userLogged) {
		if (req.session.userLogged.roles_id == 1) {
			return res.redirect("/");
		}
		else {
			return res.redirect("/admin");
		}
	}
	next();
}

module.exports = sessionDetectMiddleware;
