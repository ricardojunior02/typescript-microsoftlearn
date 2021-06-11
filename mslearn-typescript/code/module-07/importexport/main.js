"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
var greetings_module_js_1 = require("./greetings_module.js"); // imports a single function in the module
var greetings_utilities_module_js_1 = require("./greetings-utilities_module.js");
var result = dotenv_1["default"].config();
if (result.error) {
    throw result.error;
}
console.log(result.parsed); // Returns { DB_HOST: 'localhost', WEB_HOST: 'staging.adventure-works.com' }
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);
greetings_module_js_1.returnGreeting('Hola!'); // Displays 'The message from Greetings_module is Hola!'
greetings_utilities_module_js_1.returnGreeting('Ciao!'); // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
