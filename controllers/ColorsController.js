const helper = require('../helpers/ColorHelper')

var colors = [];

module.exports = app => {

    app.get('/colors', (req, res) => {
        const { d } = req.query;
        colors = helper.getColors(d);
        
        res.status(200).json({ colors: colors });
    })

    app.post('/validate-colors', (req, res) => {
        const validationObj = req.body;
        const result =  helper.validateColors(colors, validationObj);

        res.status(200).json({ message: result });
    })

}