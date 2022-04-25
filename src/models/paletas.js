const mongoose = require('./database/db.js');

//
//  DEFINIE MODELO PALETAS
//
const paletas = new mongoose.Schema({
  sabor: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: false,
  },
  preco: {
    type: Number,
    required: false,
  },
  foto: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Paletas = mongoose.model('Paleta', paletas, 'paletas');

module.exports = Paletas;
