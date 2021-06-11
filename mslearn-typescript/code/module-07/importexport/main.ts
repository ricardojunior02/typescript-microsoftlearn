import dotenv from 'dotenv';
import { returnGreeting } from './greetings_module.js';         // imports a single function in the module
import * as allGreetingFunctions from './greetings_module.js';
import { returnGreeting as returnGreetingLength,  } from './greetings-utilities_module.js';

const result = dotenv.config();

if (result.error) {
  throw result.error;
}
console.log(result.parsed);  // Returns { DB_HOST: 'localhost', WEB_HOST: 'staging.adventure-works.com' }
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);

returnGreeting('Hola!')  // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Bonjour');  // Displays 'The message from Greetings_module is Bonjour!'
returnGreetingLength('Ciao!');  // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'