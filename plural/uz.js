
function plural(params) {
    var count = isNaN(parseInt(params.count)) ? 0 : params.count;

    if (count === 0) { return params.none; }
    if (count === 1) { return params.one; }
    return params.some;
}

module.exports = plural;
