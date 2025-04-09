import {sayHello} from '../js/main.js';

QUnit.module('hello', function() {

    QUnit.test('make sure the hello function says hello', function(assert) {
        var result = sayHello();
        assert.equal(result, 'hello');
    });


});

// Create tests for...

// Clicking on bottle runs code to switch to 'message-opened' view

// Current-Message text box displays the current message in DB (use GET)

// Max char is working

// Bad language filter is working

// Code injection filter is working

// Button working

// PUT command being registered by DB (use GET command, compare what was PUT)

// 
