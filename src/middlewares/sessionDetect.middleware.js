function sessionDetectMiddleware(req, res, next) {
	if(req.session.userLogged){
		return res.redirect('admin');
	}
	next();
}

module.exports = sessionDetectMiddleware;
