const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

// enviroment variables
const env = require('dotenv');
env.config();

const indexRouter = require('./src/routes/routerIndex');
const homeRouter = require('./src/routes/home');

const port = process.env.PORT || 3000;

// app configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
//
app.use('/', indexRouter);
app.use('/home', homeRouter);

//
// servidor da app
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
