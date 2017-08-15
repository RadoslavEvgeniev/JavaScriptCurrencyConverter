const Converter = require('../models/Converter');
module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost: (req, res) => {
        let converterBody = req.body;
        let converterParams = converterBody['converter'];

        let converter = new Converter();
        converter.inputCurrencyType = converterParams.inputCurrencyType;
        converter.value = Number(converterParams.value);
        converter.outputCurrencyType = converterParams.outputCurrencyType;

        let result = converter.getResult();

        res.render('home/index', {'converter': converter, 'result': result});
    }
};