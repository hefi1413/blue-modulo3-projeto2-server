//  SCRIPT DEFINIÇÃO DB

const mongoose = require('mongoose');

//  DEFINIE CONEXÃO  COM BANCO DE DADOS

mongoose.connect(process.env.DB_HOST);
mongoose.Promisse = global.Promisse;

module.exports = mongoose;
