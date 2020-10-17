const app = require('express')();
const morgan = require('morgan');
// [Function: morgan] {
//   compile: [Function: compile],
//   format: [Function: format],
//   token: [Function: token],
//   combined: ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"',
//   common: ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]',
//   default: [Getter/Setter],
//   short: ':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms',
//   tiny: ':method :url :status :res[content-length] - :response-time ms',
//   dev: [Function: developmentFormatLine],
//   url: [Function: getUrlToken],
//   method: [Function: getMethodToken],
//   'response-time': [Function: getResponseTimeToken],
//   'total-time': [Function: getTotalTimeToken],
//   date: [Function: getDateToken],
//   status: [Function: getStatusToken],
//   referrer: [Function: getReferrerToken],
//   'remote-addr': [Function: getip],
//   'remote-user': [Function: getRemoteUserToken],
//   'http-version': [Function: getHttpVersionToken],
//   'user-agent': [Function: getUserAgentToken],
//   req: [Function: getRequestToken],
//   res: [Function: getResponseHeader]
// }


app.use(morgan('dev'));
app.use((req, res) => res.send(req.headers));

app.listen(3000, () => console.log('server started...'));