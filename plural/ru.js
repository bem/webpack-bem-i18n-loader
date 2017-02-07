
function plural(params) {
    var count = isNaN(parseInt(params.count)) ? 0 : params.count;
    var lastNumber = count % 10;
    var lastNumbers = count % 100;

    if (count === 0) { return params.none; }
    if (lastNumber == 1 && lastNumbers != 11) { return params.one; }
    if ((lastNumber > 1 && lastNumber < 5) && (lastNumbers < 10 || lastNumbers > 20)) {
        return params.some;
    }
    return params.many;
}

module.exports = plural;
