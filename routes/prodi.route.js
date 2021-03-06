const router = require('express').Router();
let Prodi = require('../models/prodi.model');
let Fakultas = require('../models/fakultas.model');

router.route('/').get((req, res) => {
    Prodi.find().populate('fakultas')
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
        .then(prodi => res.json('Data prodi berhasil ditambahkan:' + newProdi))
        .catch(err => res.status(400).json('Error: ' + err));

    Fakultas.findOneAndUpdate(
        { _id: fakultas },
        { $push: { prodi: newProdi } },
        function (error, numberAffected) {
            if (error) {
                res.json(error)
            } else {
                res.json(numberAffected)
            }
        }
    )
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