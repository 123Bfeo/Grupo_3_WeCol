const express = require("express");
const app = express();
const path = require("path");
const mainRoutes = require('./src/routers/appMain');
const productRoutes = require('./src/routers/products');
const factureController = require('./src/routers/facture');
const userController = require('./src/routers/users');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

const publicPath = path.resolve("public");
console.log(publicPath);
app.use(express.static(publicPath));

//Invocación de rutas
app.use('/', mainRoutes,productRoutes,factureController,userController);

const port = 3000;
app.listen(port, () =>
  console.log(`El servidor se está ejecutando en el puerto ${port}`)
);

