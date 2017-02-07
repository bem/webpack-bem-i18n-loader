
'use strict';

const path = require('path');
    // bn = require('@bem/naming'),
    // BemCell = require('@bem/cell'),
    // BemEntityName = require('@bem/entity-name'),
    // bemFs = require('@bem/fs-scheme')(),
    // bemImport = require('bem-import'),
    // falafel = require('falafel'),
    // vow = require('vow'),
    // vowFs = require('vow-fs'),
const loaderUtils = require('loader-utils');

module.exports = function(source) {
    return source;
};

// module.exports = function(source) {
//     this.cacheable && this.cacheable();
// 
//     console.log('^____________^');
// 
//     const callback = this.async(),
//         options = this.options.bemLoader || loaderUtils.parseQuery(this.query);
//         // ,
//         // levels = options.levels,
//         // techMap = options.techMap || (options.techs || ['js']).reduce((acc, tech) => {
//         //     acc[tech] = (acc[tech] || []).concat(tech);
//         //     return acc;
//         // }, {}),
//         // fastTechMap = Object.keys(techMap).reduce((acc, tech) => {
//         //     techMap[tech].forEach(_tech => {
//         //         acc[_tech] = tech;
//         //     });
//         //     return acc;
//         // }, {}),
//         // defaultTechs = Object.keys(techMap).reduce((acc, tech) => {
//         //     return acc.concat(techMap[tech])
//         // }, []),
//         // generators = Object.assign(require('./generators'), options.customGenerators),
//         // allPromises = [],
//         // namingOptions = options.naming || 'react',
//         // bemNaming = bn(namingOptions);
// 
// callback(null, (source + '// HELLO '));
//     //     const result = source;
// 
//     // vow.all(allPromises)
//     //     .then(() => {
//     //         callback(null, result.toString());
//     //     })
//     //     .catch(callback);
// };
// 
