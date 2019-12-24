const router = require('express').Router();
let Dosen = require('../models/dosen.model');

router.route('/').get((req, res) => {
    Dosen.find()
    .then(dosen => res.json(dosen))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const nama = req.body.nama;
    const nik = req.body.nik;
    const tempat_lahir = req.body.tempat_lahir;
    const tanggal_lahir = Date.parse(req.body.tanggal_lahir);

    const newDosen = new Dosen({
        nama, nik, tempat_lahir, tanggal_lahir, 
    });

    newDosen.save()
    .then(dosen => res.json('Data Dosen berhasil ditambahkan'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Dosen.findById(req.params.id)
    .then(dosen => res.json(Dosen))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Dosen.findByIdAndDelete(req.params.id)
    .then(dosen => res.json('Data Dosen berhasil dihapus!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Dosen.findById(req.params.id)
    .then(dosen => {
        Dosen.nama = req.body.nama;
        Dosen.nik = req.body.nik;
        Dosen.tempat_lahir = req.body.tempat_lahir;
        Dosen.tanggal_lahir = Date.parse(req.body.tanggal_lahir);

        dosen.save()
        .then(() => res.json('Data mahasiswa updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
   
});

module.exports = router;