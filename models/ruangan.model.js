const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ruanganSchema = new Schema({
    lorong: {
        type: String, 
        required: true
    },
    no_ruang: {
        type: String, 
        required: true
    },
    fakultas: {
        ref: 'Fakultas',
        type: mongoose.Schema.Types.ObjectId
    }
})

const Ruangan = mongoose.model('Ruangan', ruanganSchema);

module.exports = Ruangan;