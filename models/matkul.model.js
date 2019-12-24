const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matkulSchema = new Schema({
    nama: {
        type: String, 
        required: true
    },
    semester:{
        type: Number,
        required: true
    },
    prodi: {
        ref: 'Prodi',
        type: mongoose.Schema.Types.ObjectId
    }
})

const Matkul = mongoose.model('Matkul', matkulSchema);

module.exports = Matkul;