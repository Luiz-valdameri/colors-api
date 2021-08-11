const express = require('express');
const bodyParser = require('body-parser')
const consign = require('consign')
var cors = require('cors')


module.exports = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(cors())

    consign()
        .include('controllers')
        .into(app);

    return app;
}
