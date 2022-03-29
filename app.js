const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const mainRoutes = require('./src/routers/main.routes');
const productRoutes = require('./src/routers/products.routes');
const factureRoutes = require('./src/routers/facture.routes');
const userRoutes = require('./src/routers/users.routes');
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(session({
        secret: "Cruz",
        resave: false,
        saveUninitialized: true
      }
    ));
const publicPath = path.resolve('public');
app.use(express.static(publicPath));

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());


// Invocación de rutas
app.use('/', mainRoutes, productRoutes, factureRoutes, userRoutes);

const port = 3000;
app.listen(process.env.PORT || port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

