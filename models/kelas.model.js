const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kelasSchema = new Schema({
    kelas: {
        type: String, 
        required: true
    },
    matkul: {
        ref: 'Matkul',
        type: mongoose.Schema.Types.ObjectId
    },
    dosen: {
        ref: 'Dosen',
        type: mongoose.Schema.Types.ObjectId
    },
    sks: {
        type: Number,
        required : true
    },
    hari: {
        type: Number
    },
    waktu_mulai:{
        jam_mulai: {
            type: Number
        },
        menit_mulai:{
            type: Number
        }
    },
    waktu_selesai:{
        jam_selesai: {
            type: Number
        },
        menit_selesai:{
            type: Number
        }
    },
    mahasiswa: [{
        ref: 'Mahasiswa',
        type: mongoose.Schema.Types.ObjectId
    }]
})



const Kelas = mongoose.model('Kelas', kelasSchema);

module.exports = Kelas;