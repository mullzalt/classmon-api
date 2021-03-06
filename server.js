const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

const mahasiswaRouter = require('./routes/mahasiswa.route');
const dosenRouter = require('./routes/dosen.route');
const userRoter = require('./routes/user.route');
const fakultasRoter = require('./routes/fakultas.route');
const prodiRoter = require('./routes/prodi.route');

app.use('/mahasiswa', mahasiswaRouter);
app.use('/dosen', dosenRouter);
app.use('/user', userRoter);
app.use('/fakultas', fakultasRoter);
app.use('/prodi', prodiRoter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});