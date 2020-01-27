const mongoose = require('mongoose');

const RepublicaSchema = new mongoose.Schema({
    titulo:String,
    valor:String,
    bairro:String,
    pessoas:String,
    desc:String,
    animal:String,
    movelQuarto:String,
    moveisComun:String,
    valorContas:String,
    observacao:String,
});

module.exports = mongoose.model('Republica', RepublicaSchema);