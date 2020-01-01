const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fakultasSchema = new Schema({
    nama: {
        type: String,
        required: true
    },
    prodi: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prodi'
    }]
})

const Fakultas = mongoose.model('Fakultas', fakultasSchema);

module.exports = Fakultas;