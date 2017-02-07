
'use strict';

const path = require('path');

const falafel = require('falafel');
const nodeEval = require('node-eval');

const paramReg = /<i18n:param>(.*?)<\/i18n:param>/;

module.exports = function(source) {
    this.cacheable && this.cacheable();

    const callback = this.async();
    const result = falafel(source, node => {
        if (
            node.type === 'Property' &&
            node.value.type === 'ArrayExpression'
        ) {
            const resPath = this.resourcePath;
            const pathToPlural = path.resolve(resPath, __dirname, 'plural', path.basename(resPath));
            const newV = toPlural(nodeEval(node.value.source()), pathToPlural);
            node.value.update(newV);
        } else if (
            node.type === 'Property' &&
            node.value.type === 'Literal' &&
            node.value.value.match(paramReg)
        ) {
            node.value.update(toParam(node.value.value));
        }
    });

    callback(null, result.toString());
};

// TODO: improve case ` '' + params[""] + '' `
function toParam(str) {
    const rpl = str => str.replace(paramReg, (_, captured) => {
        return `' + params['${captured}'] + '`
    });
    return `function(params) {
        return '${rpl(str)}';
    }`;
}

function toPlural(arr, pathToPlural) {
    const plurals = {
        one: arr[0],
        some: arr[1],
        many: arr[2],
        none: arr[3]
    };

    return `function(params) {
            var plural = require('${pathToPlural}');
            return plural({
                count: params.count,
                one: '${plurals.one}',
                some: '${plurals.some}',
                many: '${plurals.many}',
                none: '${plurals.none}'
            });
        }`;
}
