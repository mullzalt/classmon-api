const router = require('express').Router();
let Kelas = require('../models/kelas.model');

router.route('/').get((req, res) => {
    Kelas.find()
    .then(kelas => res.json(kelas))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const kelas = req.body.kelas;
    const matkul = req.body.matkul;
    const dosen = req.body.dosen;
    const sks = req.body.sks;
    const jam_mulai = req.body.jam_mulai;
    const menit_mulai = req.body.menit_mulai;
    const jam_selesai = req.body.jam_selesai;
    const menit_selesai = req.body.menit_selesai;
    const mahasiswa = req.body.mahasiswa;

    const newRuangan = new Fakultas({
       kelas: req.body.kelas,
       matkul: req.body.matkul,
       dosen: req.body.dosen,
       sks: req.body.sks,
       waktu_mulai: {
            jam_mulai: req.body.jam_mulai,
            menit_mulai: req.body.menit_mulai
       },
       waktu_selesai: {
            jam_selesai: req.body.jam_selesai,
            menit_selesai: req.body.menit_selesai
       },
       mahasiswa: [req.body.mahasiswa]
    });

    newRuangan.save()
    .then(ruangan => res.json('Data ruangan berhasil ditambahkan'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Ruangan.findById(req.params.id)
    .then(ruangan => res.json(ruangan))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Ruangan.findByIdAndDelete(req.params.id)
    .then(ruangan => res.json('Data ruangan berhasil dihapus!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Prodi.findById(req.params.id)
    .then(ruangan => {
        ruangan.lorong = req.body.lorong;
        ruangan.no_lorong = req.body.no_lorong;
        ruangan.fakultas = req.body.fakultas;

        ruangan.save()
        .then(() => res.json('Data ruangan updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;