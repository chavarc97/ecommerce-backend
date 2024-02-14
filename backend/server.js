const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const cors = require('cors')
const port = process.env.PORT || 5000;
const {errorHandler} = require("./middleware/errorMiddleware");

// Crear la aplicación de express
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

// Manejador de errores
app.use(errorHandler);

// Iniciar el servidor
app.listen(port, () => console.log(`escuchando en el puerto: ${port}`));
