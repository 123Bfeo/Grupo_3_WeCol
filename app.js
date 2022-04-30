const express = require("express");
const app = express();
const path = require("path");
const mainRoutes = require("./src/routers/main.routes");
const productRoutes = require("./src/routers/products.routes");
const factureRoutes = require("./src/routers/facture.routes");
const userRoutes = require("./src/routers/users.routes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

const publicPath = path.resolve("public");
app.use(express.static(publicPath));

// Invocación de rutas
app.use("/", mainRoutes, productRoutes, factureRoutes);
app.use("/users", userRoutes);
const port = 3000;
app.listen(port, () => {
  console.log(`El servidor se está ejecutando en el puerto ${port}`);
});
