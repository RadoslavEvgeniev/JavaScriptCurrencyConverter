function Converter(inputCurrencyType, value, outputCurrencyType) {
    this.inputCurrencyType = inputCurrencyType;
    this.value = value;
    this.outputCurrencyType = outputCurrencyType;

    this.getResult = function () {
        let result = 0;
        let inputValue = 0;
        switch (this.inputCurrencyType) {
            case "BGN":
                inputValue = this.value * 1.00000;
                break;
            case "USD":
                inputValue = this.value * 1.67447;
                break;
            case "GBP":
                inputValue = this.value * 2.18721;
                break;
            case "EUR":
                inputValue = this.value * 1.95440;
                break;
        }
        switch (this.outputCurrencyType) {
            case "BGN":
                result = inputValue * 1.00000;
                break;
            case "USD":
                result = inputValue * 0.597483;
                break;
            case "GBP":
                result = inputValue * 0.457207;
                break;
            case "EUR":
                result = inputValue * 0.511681;
                break;
        }
        return result;

    }
}
module.exports = Converter;