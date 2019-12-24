const router = require('express').Router();
let Prodi = require('../models/prodi.model');

router.route('/').get((req, res) => {
    Prodi.find()
    .then(prodi => res.json(prodi))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const nama = req.body.nama;
    const fakultas = req.body.fakultas;

    const newProdi = new Prodi({
        nama, fakultas
    });

    newProdi.save()
    .then(prodi => res.json('Data prodi berhasil ditambahkan'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Prodi.findById(req.params.id)
    .then(prodi => res.json(prodi))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Prodi.findByIdAndDelete(req.params.id)
    .then(prodi => res.json('Data prodi berhasil dihapus!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Prodi.findById(req.params.id)
    .then(prodi => {
        prodi.nama = req.body.nama;
        prodi.fakultas = req.body.fakultas;

        prodi.save()
        .then(() => res.json('Data prodi updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;