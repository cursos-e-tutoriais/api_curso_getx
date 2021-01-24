const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.header.authorization;

    if (!authHeader)
        return res.status(401).json({error: 'Token not provided!'});

    const parts = authHeader.split(' ');

    if (!parts.length == 2)
        return res.status(401).json({error: 'Token mal formated'});

    const [schema, token] = parts;

    if (!/^Bearer$/i.test(schema))
        return res.status(401).json({error: 'Token mal formated!'});
    
    jwt.verify(token, 'cursogetx2020', (err, decoded) => {
        if (err) return res.status(401).json({error: 'Token invalid!'});

        req.mat = decoded.id;

        return next();
    });
}