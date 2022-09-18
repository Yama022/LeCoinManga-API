const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
    res.json({
        name: 'LeCoinManga-API',
        version: '1.0.0',
        authors: [
            {
                name: 'Rémi Jacquemin',
                github_url: 'https://github.com/Yama022',
            },
            {
                name: 'Théo Biet',
                github_url: 'https://github.com/TheoBIET',
            }
        ]
    });
});

module.exports = router;