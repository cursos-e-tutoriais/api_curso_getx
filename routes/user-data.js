const authHeader = require('../middleware/auth');

const express = require('express');
const User = require('../model/user');

const router = express.Router();

router.use(authHeader);

router.get('/data', async (req, res) => {
    var email = req.body.email;
    const user = await User.findOne({ email });
    
    res.status(200).json({ data: user });
});

module.exports = app => app.use('/api/v1', router);