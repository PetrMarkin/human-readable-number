module.exports = function toReadable (number) {
    let numberToString = String(number);
    let x = numberToString[1];
    let ones = new Array ('', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine');
    let tn = new Array (' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen');
    let decims = new Array ('', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety');
    let hundred = ' hundred';
    let output = '';
    if (number === 0) {
        return 'zero';
    }
    if (number < 10) {
        output = ones[number];
        output = output.slice(1);
        return output;
    }
    if (number < 20) {
        output = tn[parseInt(numberToString.charAt(1))];
        output = output.slice(1);
        return output;
    }
    if (numberToString.length === 3 && x === '1') {
        output = ones[parseInt(numberToString.charAt(0))] + hundred;
        output = output + tn[parseInt(numberToString.charAt(2))];
        output = output.slice(1);
        return output;
    }
    if (number > 99 && x !== '1') {
        output = ones[parseInt(numberToString.charAt(0))] + hundred;
        output = output + decims[parseInt(numberToString.charAt(1))];
        output = output + ones[parseInt(numberToString.charAt(2))];
        output = output.slice(1);
        return output;
    }
    output = output + decims[parseInt(numberToString.charAt(0))];
    output = output + ones[parseInt(numberToString.charAt(1))];
    output = output.slice(1);
    return output;
}
