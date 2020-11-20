// --- EXAMPLES ---
// Наиболее часто используемые свойства объекта process:
[
  'arch',               // архитектура процессора, на котором запущен Node js процесс, возможные значения: arm, ia32, x64
  'argv',               // массив с параметрами запуска процесса, причем вслед за элементом массива, который содержит параметр, будет элемент со значением этого параметра
  'connected',          // булевое значение, значение установленное в true означает, что Node js процесс был создан с IPC каналом
  'env',                // объект с пользовательским окружением
  'pid',                // уникальный идентификатор процесса
  'platform',           // платформа операционной системы, возможные значения: freebsd, linux, win32 и т.д
  'version',            // текущая версия Node js
].forEach(e => console.log(e, ': ', process[e]));

// Наиболее часто используемые методы объекта process:
[
  'cpuUsage',           // возвращает объект с пользовательским и системным временем использования процесса в микросекундах, на основе которого можно рассчитать загрузку процессора в процентах, необязательным параметром может принимать свое предыдущее значение
  'hrtime',             // возвращает высоко точное время в виде массива с двумя элементами: секунды и наносекунды
  'cwd',                // возвращает рабочую директорию Node js процесса
  'memoryUsage',        // возвращает объект с данными об использовании Node js процессом оперативной памяти, объект содержит свойства rss (отведенный под процесс объем памяти), heapTotal (объем памяти, отведенный под V8), heapUsed (объем памяти, используемый V8 в данный момент) и external (использование памяти объектами C++), все значения в байтах
  'uptime',             // возвращает количество миллисекунд, прошедшее с момента запуска процесса
  // 'send',               // используется для обмена сообщениями между основным и дочерними процессами
  // 'disconnect',         // отключает IPC канал от главного процесса и завершает дочерний
  // 'exit',               // завершает процесс при первой же возможности с заданным кодом (по умолчанию код завершения равен 0)
  // 'on',                 // метод обработки событий
].forEach(e => console.log(e, ': ', process[e]()));

// Наиболее часто используемые события объекта process:
[
  'beforeExit',         // инициируется, когда полностью заканчивается цикл событий
  'disconnect',         // генерируется в дочернем процессе при закрытии канала IPC
  'exit',               // инициируется при завершении процесса вызовом метода process.exit() или по завершению цикла событий
  'message',            // может возникнуть только в главном процессе, когда в одном из дочерних процессов вызывается метод message()
  'uncaughtException',  // генерируется в случае возникновения необработанного исключения, но процесс при этом не завершается
].forEach(e => process.on(e, (err, res) => {
  err ? console.error(err) : console.log(`---> ${e} DONE.`)
}));


// console.log(process);
// process {
//   version: 'v15.0.0',
//   versions: {},
//   arch: 'x64',
//   platform: 'win32',
//   release: {},
//   _rawDebug: [Function: _rawDebug],
//   moduleLoadList: [],
//   binding: [Function: binding],
//   _linkedBinding: [Function: _linkedBinding],
//   _events: [Object: null prototype] {},
//   _eventsCount: 4,
//   _maxListeners: undefined,
//   domain: null,
//   _exiting: false,
//   config: {},
//   dlopen: [Function: dlopen],
//   uptime: [Function: uptime],
//   _getActiveRequests: [Function: _getActiveRequests],
//   _getActiveHandles: [Function: _getActiveHandles],
//   reallyExit: [Function: reallyExit],
//   _kill: [Function: _kill],
//   cpuUsage: [Function: cpuUsage],
//   resourceUsage: [Function: resourceUsage],
//   memoryUsage: [Function: memoryUsage],
//   kill: [Function: kill],
//   exit: [Function: exit],
//   openStdin: [Function (anonymous)],
//   allowedNodeEnvironmentFlags: [Getter/Setter],
//   assert: [Function: deprecated],
//   features: {},
//   _fatalException: [Function (anonymous)],
//   setUncaughtExceptionCaptureCallback: [Function: setUncaughtExceptionCaptureCallback],
//   hasUncaughtExceptionCaptureCallback: [Function: hasUncaughtExceptionCaptureCallback],
//   emitWarning: [Function: emitWarning],
//   nextTick: [Function: nextTick],
//   _tickCallback: [Function: runNextTicks],
//   _debugProcess: [Function: _debugProcess],
//   _debugEnd: [Function: _debugEnd],
//   _startProfilerIdleNotifier: [Function (anonymous)],
//   _stopProfilerIdleNotifier: [Function (anonymous)],
//   stdout: [Getter],
//   stdin: [Getter],
//   stderr: [Getter],
//   abort: [Function: abort],
//   umask: [Function: wrappedUmask],
//   chdir: [Function: wrappedChdir],
//   cwd: [Function: wrappedCwd],
//   env: {},
//   title: 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe',
//   argv: [],
//   execArgv: [],
//   pid: 8456,
//   ppid: 5928,
//   execPath: 'C:\\Program Files\\nodejs\\node.exe',
//   debugPort: 9229,
//   hrtime: [Function: hrtime] { bigint: [Function: hrtimeBigInt] },
//   argv0: 'C:\\Program Files\\nodejs\\node.exe',
//   _preload_modules: [],
//   mainModule: Module {},
//   [Symbol(kCapture)]: false
// }


// Коды завершения Node js процесса:
//    1 - исключение, которое не обработано ни JavaScript, ни обработчиком события uncaughtException;
//    3, 4, 10 - означают ошибки исходного кода JavaScript, обычно встречаются только при разработке самой платформы Node js;
//    5 - критическая ошибка V8;
//    6 - необработанное исключение не попало в обработчик критических исключений;
//    7 - возникновение ошибки в обработчике критических исключений;
//    9 - используется, если были неправильно заданы аргументы;
//    12 - возникает в режиме отладки при некорректном указании порта.