//magic = require('bindings')('index'),
var pack = require('./package.json');
const
magic = require('./' + [
        'build',
        'profiler',
        'v' + pack.version,
        ['node', 'v' + process.versions.modules, process.platform, process.arch].join('-'),
        'profiler.node'
    ].join('/')),
events = require('events');

module.exports = new events.EventEmitter();

module.exports.gc = magic.gc;
module.exports.HeapDiff = magic.HeapDiff;

magic.upon_gc(function(has_listeners, event, data) {
  if (has_listeners) {
    return (module.exports.listeners('stats').length > 0);
  } else {
    return module.exports.emit(event, data);
  }
});
