const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

// POST
router.post('/', (req,res) => {
    console.log('in /feedback POST', req.body);
    const queryText =   `INSERT INTO "feedback"
                        ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4);`;
    let { feeling, understanding, support, comments } = req.body;
    pool.query(queryText, [feeling, understanding, support, comments])
        .then(result => {
            console.log('POST successful');
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('There\'s an error in POST', error);
            res.sendStatus(500);
        })
})

module.exports = router;