const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prodiSchema = new Schema({
    nama: {
        type: String, 
        required: true
    },
    fakultas: {
        ref: 'Fakultas',
        type: mongoose.Schema.Types.ObjectId
    }
})


const Prodi = mongoose.model('Prodi', prodiSchema);


module.exports = Prodi;