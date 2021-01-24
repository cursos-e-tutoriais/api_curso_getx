const express = require('express');
const User = require('../model/user');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        if (await User.findOne({ email }))
            return res.status(404).json({message: 'User already exists'});
        
        const user = await User.create(req.body);

        user.pass = undefined;

        res.status(200).json({message: 'User created!'});
    } catch (err) {
        if (err) throw err;
        res.status(500).json({message: 'Algo deu errado!'});
    }
});

module.exports = app => app.use('/api/v1', router);