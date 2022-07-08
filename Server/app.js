const express = require("express");
const { join, resolve } = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors')

const mainRoutes = require('./src/routes/main.routes');
const adminRoutes = require('./src/routes/admin.routes');
const userRoutes = require('./src/routes/users.routes');
const factureRoutes = require('./src/routes/facture.routes');
const productRoutes = require('./src/routes/products.routes');
const productApiRouter = require('./src/routes/Api/productApiRoutes')
const brandApiRouter = require('./src/routes/Api/brandApiRoutes')
const userLoggedMiddleware = require('./src/middlewares/userLogged.middleware');

const app = express();
app.use(cors())

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'src/views'));

app.use(session({
		secret: 'secreto',
		resave: false,
		saveUninitialized: false
	}
));
const publicPath = resolve('public');
app.use(express.static(publicPath));

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(userLoggedMiddleware);

// Invocación de rutas
app.use('/', mainRoutes, userRoutes);
app.use('/admin', adminRoutes, userRoutes, productRoutes);

app.use('/product', productRoutes);
app.use('/facture', factureRoutes);

app.use('/api', productApiRouter, brandApiRouter)

const PORT = 3001;
const hostname = 'localhost';
app.listen(process.env.PORT || PORT, () => {
	console.log(`Servidor corriendo en http://${hostname}:${PORT}`);
});
