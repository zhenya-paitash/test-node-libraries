const hljs = require('highlight.js/lib/core');
// {
//   highlight: [Function: highlight],
//   highlightAuto: [Function: highlightAuto],
//   fixMarkup: [Function: deprecateFixMarkup],
//   highlightBlock: [Function: highlightBlock],
//   configure: [Function: configure],
//   initHighlighting: [Function: initHighlighting],
//   initHighlightingOnLoad: [Function: initHighlightingOnLoad],
//   registerLanguage: [Function: registerLanguage],
//   listLanguages: [Function: listLanguages],
//   getLanguage: [Function: getLanguage],
//   registerAliases: [Function: registerAliases],
//   requireLanguage: [Function: requireLanguage],
//   autoDetection: [Function: autoDetection],
//   inherit: [Function: inherit],
//   addPlugin: [Function: addPlugin],
//   vuePlugin: { install: [Function: install] },
//   debugMode: [Function (anonymous)],
//   safeMode: [Function (anonymous)],
//   versionString: '10.3.2',
//   ...
// }

const app = require('express')();

hljs.registerLanguage('js', require('highlight.js/lib/languages/javascript'));
const jsApp = hljs.highlight('js', `
  const hljs = require('highlight.js/lib/core');
  const express = require("express");
  const app = express();

  app.get('/', (req, res) => res.send('hello world'));

  app.listen(3000);
`).value;
const monokai = require('fs').readFileSync(__dirname + '/node_modules/highlight.js/styles/monokai-sublime.css', 'utf-8');

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/custom', (req, res) => res.send(`<style>${monokai}</style><pre><code class="lang-javascript">${jsApp}</code></pre>`));

app.listen(3000);