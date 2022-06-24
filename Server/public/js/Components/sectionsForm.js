const login = document.getElementById('login');
const register = document.getElementById('register');

if (document.location.href.includes('/login')) {
	login.classList.add('active');
} else if (document.location.href.includes('/register')) {
	register.classList.add('active');
}



