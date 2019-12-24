const router = require('express').Router();
let Matkul = require('../models/matkul.model');

router.route('/').get((req, res) => {
    Matkul.find()
    .then(matkul => res.json(matkul))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const nama = req.body.nama;
    const semester = req.body.semester;
    const prodi = req.body.prodi;

    const Matkul = new Matkul({
        nama, semester, prodi
    });

    Matkul.save()
    .then(matkul => res.json('Data matkul berhasil ditambahkan'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Matkul.findById(req.params.id)
    .then(matkul => res.json(matkul))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Matkul.findByIdAndDelete(req.params.id)
    .then(matkul => res.json('Data matkul berhasil dihapus!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Matkul.findById(req.params.id)
    .then(matkul => {
        matkul.nama = req.body.nama;
        matkul.semester = req.body.semester;
        matkul.prodi = req.body.prodi;

        matkul.save()
        .then(() => res.json('Data matkul updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;