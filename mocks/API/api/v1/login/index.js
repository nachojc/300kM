(function() {
    'use strict';

    const express = require('express');
    const router = express.Router();

    router
        .get('/', getFn)
        .post('/', postFn);

    exports = module.exports = router;



    const data = {
        state: 1,
        status: true,
        uuid: '123456789',
        user: 'Nacho'
    };

    function postFn(req, res) {
        console.log(req.body);
        res.json(data);
    }

    function getFn(req, res) {
        console.log(req.body);
        res.json({});
    }

}());