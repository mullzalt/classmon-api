const router = require('express').Router();
let Fakultas = require('../models/fakultas.model');

router.route('/').get((req, res) => {
    Fakultas.find()
        .then(fakultas => res.json(fakultas))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    console.log(req)
    var nama = req.body.nama;

    const newFakultas = new Fakultas({
        nama: nama,
    });

    newFakultas.save()
        .then(fakultas => res.json('Data fakultas berhasil ditambahkan:' + newFakultas))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Fakultas.findById(req.params.id).populate('Prodi')
        .then(fakultas => res.json(fakultas))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Fakultas.findByIdAndDelete(req.params.id)
        .then(() => res.json('Data fakultas berhasil dihapus!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Fakultas.findById(req.params.id)
        .then(fakultas => {
            fakultas.nama = req.body.nama;

            fakultas.save()
                .then(() => res.json('Data fakultas updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;