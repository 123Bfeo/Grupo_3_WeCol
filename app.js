const express = require("express");
const app = express();
const { join, resolve } = require('path');
const methodOverride = require('method-override');
const mainRoutes = require('./src/routes/main.routes');
const productRoutes = require('./src/routes/products.routes');
const factureRoutes = require('./src/routes/facture.routes');
const userRoutes = require('./src/routes/users.routes');
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'src/views'));

app.use(session({
	secret: 'Cruz',
	resave: false,
	saveUninitialized: true
	}
));
const publicPath = resolve('public');
app.use(express.static(publicPath));

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());

// Invocación de rutas
app.use('/', mainRoutes);
app.use('/product', productRoutes);
app.use('/facture', factureRoutes);
app.use('/user', userRoutes);

const PORT = 3000;
app.listen(process.env.PORT || PORT, () => {
	console.log(`Servidor corriendo en el puerto ${ PORT }`);
});
