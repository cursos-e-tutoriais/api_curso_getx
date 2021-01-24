const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', async (next) => {
    const hash = await bcrypt.hash(this.pass, 10);
    this.pass = hash;
    next();
});

const User = mongoose.model('user', UserSchema);

module.exports = User;