'use strict';

const mongoose = require('mongoose');

const uri = 'mongodb://localhost/realCrud';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

.then(db => console.log('Database is connected'))
.catch(err => console.log('err'));
