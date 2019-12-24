const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dosenSchema = new Schema({
    nama: {type: String, required: true},
    nik: {type: String, required: true, unique: true},
    tempat_lahir: {type: String, required: true},
    tanggal_lahir: {type: Date, required: true},
})

const Dosen = mongoose.model('Dosen', dosenSchema);

module.exports = Dosen;