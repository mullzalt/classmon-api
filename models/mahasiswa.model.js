const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MahasiswaSchema = new Schema({
    nama: {type: String, required: true},
    nim: {type: String, required: true, unique: true},
    tempat_lahir: {type: String, required: true},
    tanggal_lahir: {type: Date, required: true},
    tahun_masuk: {type: Number, required: true},
    prodi: {
        ref: 'Prodi',
        type: mongoose.Schema.Types.ObjectId
    }
})

const Mahasiswa = mongoose.model('Mahasiswa', MahasiswaSchema);

module.exports = Mahasiswa;