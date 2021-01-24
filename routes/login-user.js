const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const User = require('../model/user');

router.post('/login', async (req, res) => {
    const { email, pass } = req.body;

    const user = await User.findOne({ email }).select('+pass');

    if (!user)
        return res.status(404).json({message: 'User not found'});

    const token = jwt.sign({id: user.email}, 'cursogetx2020', {
        expiresIn: '1d'
    });

    user.pass = undefined;

    res.status(200).json({message: 'User authenticated!', token: token});
});

module.exports = app => app.use('/api/v1', router);