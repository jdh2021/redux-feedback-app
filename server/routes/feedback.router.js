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
        });
})

// GET
router.get('/', (req, res) => {
    console.log('in /feedback GET');
    const queryText = 'SELECT * from "feedback" ORDER BY "id" DESC;'
    pool.query(queryText).then(result => {
        console.log('GET successful');
        res.send(result.rows);
    })
    .catch(error => {
        console.log('There\'s an error in GET', error);
        res.sendStatus(500);
    });
});

// PUT
router.put('/:id', (req, res) => {
    const feedbackId= req.params.id;
    console.log('in /feedback PUT. Id to update is:', feedbackId);
    const queryText = `UPDATE "feedback"
                       SET "flagged" = NOT flagged
                       WHERE "id" = $1;`;
    pool.query(queryText, [feedbackId]).then(result => {
        console.log('PUT successful');
        res.sendStatus(200);
    }).catch((error) => {
        console.log('There\'s an error in PUT', error);
        res.sendStatus(500);
    });
});

// DELETE
router.delete('/:id', (req, res) => {
    const feedbackId= req.params.id;
    console.log('in /feedback DELETE. Id to delete is:', feedbackId);
    const queryText =   `DELETE FROM "feedback"
                        WHERE "id" = $1;`;
    pool.query(queryText, [feedbackId]).then(result => {
        console.log('DELETE successful');
        res.sendStatus(200);
    }).catch(error => {
        console.log('There\'s an error in DELETE');
        res.sendStatus(500);
    });
});

module.exports = router;