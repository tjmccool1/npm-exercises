// index js //
"use strict";





const $ = require('jquery');
const sayHello = () => { console.log("Hello"); }
sayHello();

$('body').append("<h1>Hello</h1>").css('background-color', 'green');
