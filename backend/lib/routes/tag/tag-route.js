const express = require('express');
const router = express.Router();
//const bodyParser = require('body-parser').json();
const Tag = require('../models/tag-schema');

router.post('/tag', (req, res, next) => {
    console.log('tag route');
    Tag.findOne({
        tag: req.body.tag
    }).then(tag => {
        if(tag) {
            return res.status(400).json({
                tag: 'tag already exists'
            });
        } else {
            req.body.save()
                .then(tag => {
                    res.json(tag);
                });
        }
    })
        .catch(next);
});

module.exports = router;
