const mongoose = require('mongoose')
const mongoURL ='mongodb://localhost:27017/latihan2';
mongoose.connect(mongoURL,
    err => {
        if(err) throw err;
        console.log('Berhasil konek ke Mongo')
    });