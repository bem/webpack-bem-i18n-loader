
function plural(params) {
    var count = isNaN(parseInt(params.count)) ? 0 : params.count;

    if (count === 0) { return params.none; }
    return params.some;
}

module.exports = plural;
