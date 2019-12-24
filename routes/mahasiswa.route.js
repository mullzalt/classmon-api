const router = require('express').Router();
let Mahasiswa = require('../models/mahasiswa.model');

router.route('/').get((req, res) => {
    Mahasiswa.find()
    .then(mahasiswa => res.json(mahasiswa))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const nama = req.body.nama;
    const nim = req.body.nim;
    const tempat_lahir = req.body.tempat_lahir;
    const tanggal_lahir = Date.parse(req.body.tanggal_lahir);
    const tahun_masuk = req.body.tahun_masuk;
    const prodi = req.body.prodi;

    const newMahasiswa = new Mahasiswa({
        nama, nim, tempat_lahir, tanggal_lahir, tahun_masuk, prodi,
    });

    newMahasiswa.save()
    .then(mahasiswa => res.json('Data mahasiswa berhasil ditambahkan'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Mahasiswa.findById(req.params.id)
    .then(mahasiswa => res.json(mahasiswa))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Mahasiswa.findByIdAndDelete(req.params.id)
    .then(mahasiswa => res.json('Data mahasiswa berhasil dihapus!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Mahasiswa.findById(req.params.id)
    .then(mahasiswa => {
        mahasiswa.nama = req.body.nama;
        mahasiswa.nim = req.body.nim;
        mahasiswa.tempat_lahir = req.body.tempat_lahir;
        mahasiswa.tanggal_lahir = Date.parse(req.body.tanggal_lahir);
        mahasiswa.tahun_masuk = req.body.tahun_masuk;
        mahasiswa.prodi = req.body.prodi;

        mahasiswa.save()
        .then(() => res.json('Data mahasiswa updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;