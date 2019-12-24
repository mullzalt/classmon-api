const router = require('express').Router();
let Ruangan = require('../models/ruangan.model');

router.route('/').get((req, res) => {
    Ruangan.find()
    .then(ruangan => res.json(ruangan))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const lorong = req.body.lorong;
    const no_ruang = req.body.no_ruang;
    const fakultas = req.body.fakultas;

    const newRuangan = new Ruangan({
        lorong, no_ruang, fakultas
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