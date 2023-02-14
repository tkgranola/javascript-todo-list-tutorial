/*TKs TO-DO List*/
const test = require('tape');       // https://github.com/dwyl/learn-tape
const fs = require('fs');           // to read html files (see below)
const path = require('path');       // so we can open files cross-platform
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'));
require('jsdom-global')(html);      // https://github.com/rstacruz/jsdom-global
const app = require('../lib/todo-app.js'); // functions to test
const id = 'test-app';              // all tests use 'test-app' as root element