// index js //
//not needed with npm //"use strict";


//this will break //$(document).ready(function(){

const $ = require('jquery');
const hello = require('./say-hello.js');

const sayHello = () => {console.log("Hello");}
sayHello();

$('body').append("<h1>Hello</h1>")
        .append("<h4>I got this!!!!!!</h4>")
        .css({'background-color': 'green',
                'text-align': 'center'
            })
        .append('<h2>' + hello.niceMessage() +'</h2>')
        .append('<h2>' + hello.niceMessage2() +'</h2>');

//});

