const { UV_FS_O_FILEMAP } = require('constants');
const os = require('os');
// {
//   arch: [Function: arch],
//   cpus: [Function: cpus],
//   endianness: [Function: endianness],
//   cpus: [Function: cpus],
//   endianness: [Function: endianness],
//   getPriority: [Function: getPriority],
//   homedir: [Function: hidden],
//   hostname: [Function: hidden],
//   loadavg: [Function: loadavg],
//   networkInterfaces: [Function: networkInterfaces],
//   platform: [Function: platform],
//   release: [Function: getOSRelease],
//   setPriority: [Function: setPriority],
//   tmpdir: [Function: tmpdir],
//   totalmem: [Function: getTotalMem],
//   type: [Function: getOSType],
//   userInfo: [Function: userInfo],
//   uptime: [Function: getUptime],
//   version: [Function: getOSVersion],
//   constants: [Object: null prototype],
//   EOL
// }

console.table({
  'arch':               os.arch(),
  'cpus':               os.cpus().length,
  'endianness':         os.endianness(),
  'getPriority':        os.getPriority(),
  'homedir':            os.homedir(),
  'hostname':           os.hostname(),
  'loadavg':            os.loadavg().join(', '),
  'networkInterfaces':  Object.keys(os.networkInterfaces()).join(', '),
  'platform':           os.platform(),
  'release':            os.release(),
  'tmpdir':             os.tmpdir(),
  'totalmem':           os.totalmem(),
  'type':               os.type(),
  'userInfo':           os.userInfo().username,
  'uptime':             os.uptime(),
  'versios':            os.version(),
  'constants':          os.constants['UV_UDP_REUSEADDR']
});