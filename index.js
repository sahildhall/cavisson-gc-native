/**
 * Created by Sahil on 11/16/16.
 */

var pack = require('./package.json');
module.exports.index = require('./' + [
        'build',
        'profiler',
        'v' + pack.version,
        ['node', 'v' + process.versions.modules, process.platform, process.arch].join('-'),
        'profiler.node'
    ].join('/'));