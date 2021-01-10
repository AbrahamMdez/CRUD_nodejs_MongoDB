'use strict';

const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

//Este es un metodo para encriptar contraseñas, esta funcion nos valida una contraseña
UserSchema.methods.encrypPassword = async password => {
    //Aqui le decimos que haga un metodo gensalt.
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

//Este metodo nos coge la contraseña de la funcion de arriba validada y nos la compara con las que tenemos en bbdd
UserSchema.methods.matchPassword = async password => {
    return await bcrypt.compare(password, this.password);
};


module.exports = model('User', UserSchema);