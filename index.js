
'use strict';

const path = require('path');

const falafel = require('falafel');
const nodeEval = require('node-eval');

module.exports = function(source) {
    this.cacheable && this.cacheable();

    const callback = this.async();
    const result = falafel(source, node => {
        if (
            node.type === 'Property' &&
            node.value.type === 'ArrayExpression'
        ) {
            const pathToPlural = path.resolve(this.resourcePath, __dirname, 'plural', path.basename(res));
            const newV = toPlural(nodeEval(node.value.source()), pathToPlural);
            node.value.update(newV);
        }
    });


    callback(null, (result.toString() + '// HELLO '));
};


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
