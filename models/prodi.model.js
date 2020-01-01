const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prodiSchema = new Schema({
    nama: {
        type: String,
        required: true
    },
    fakultas: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fakultas'
    }
})


const Prodi = mongoose.model('Prodi', prodiSchema);


module.exports = Prodi;